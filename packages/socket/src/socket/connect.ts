import { debug } from 'console'
import { promiseTimeout } from './promiseTimeout'
import { nanoid } from 'nanoid'
import { Socket, io } from 'socket.io-client'

export type Message<T> = { data: { msgId?: string } } & T
export type Callback<T> = (result: T) => void
export interface SendOption {
  topic: string
  path: string
}

const clients = new Map<string, Socket>()

const appsId = localStorage.getItem('appId')
const auth = localStorage.getItem('auth')
const token = auth ? JSON.parse(auth).token : ''
const subscribers = new Map<string, Callback<any>[]>()

const messageQueue = new Map<
  string,
  {
    topic: string
    data: Message<any>
  }[]
>()

const init = (path: string, client: Socket) => {
  clients.set(path, client)
  client.on('connect', () => {
    messageQueue.get(path)?.forEach((msg) => client.send(msg.topic, msg.data))
    messageQueue.set(path, [])
  })
  client.onAny((event: string, topic: string, message: any) => {
    if (typeof message === 'string') {
      try {
        message = JSON.parse(message)
      } catch (error) {
        console.log(error)
      }
    }

    const mid: string = message?.mid || message?.context?.mid || topic

    for (let key of subscribers.keys()) {
      if (mid?.startsWith(key)) {
        subscribers.get(key)?.forEach((cb) => {
          cb(message)
        })
      }
    }
  })

  client.on('error', (error: any) => {
    console.warn(error)
  })
}

const connect = (path: string) => {
  const client = io(location.origin, {
    path,
    transports: ['websocket'],
    auth: {
      sessionId: nanoid(),
      accessToken: token,
      appId: appsId,
    },
  })

  init(path, client)
}

const send = (message: any, option: SendOption) => {
  const mid = nanoid()
  message.mid = mid
  const socket = clients.get(option.path)
  if (socket) {
    socket.emit(option.topic, message)
  } else {
    const queue = messageQueue.get(option.path) || []
    queue.push({
      topic: option.topic,
      data: message,
    })
    messageQueue.set(option.path, queue)
  }

  return mid
}

const subscribe = (topic: string, cb: Callback<any>) => {
  const callbacks = subscribers.get(topic) || []
  callbacks.push(cb)
  subscribers.set(topic, callbacks)
}
const unsubscribe = (id: string | Callback<any>) => {
  if (typeof id === 'string') {
    return subscribers.delete(id)
  }
  if (typeof id === 'function') {
    for (const [key, cbs] of subscribers.entries()) {
      const index = cbs.indexOf(id)
      if (index >= 0) {
        cbs.splice(index, 1)
        subscribers.set(key, cbs)
        break
      }
    }
  }
}
const tools: {
  getSocket: (path: string) => Socket<any, any> | undefined
  connect: (path: string) => void
  watchOnce: <T>(topic: string, msg: Message<T>, timeoutSeconds: number | undefined, path: string) => Promise<T>
  subscribe: (topic: string, cb: Callback<any>) => void
  unsubscribe: (id: string | Callback<any>) => boolean | undefined
} = {
  getSocket: (path: string) => clients.get(path),
  connect,
  watchOnce: <T>(topic: string, msg: Message<T>, timeoutSeconds = 60, path: string) => {
    const msgId = send(msg, {
      path,
      topic,
    })
    const promise = new Promise<T>((resolve) => subscribe(msgId, resolve))
    return promiseTimeout<T>(promise, timeoutSeconds).finally(() => unsubscribe(msgId))
  },
  subscribe,
  unsubscribe,
}

export default tools
