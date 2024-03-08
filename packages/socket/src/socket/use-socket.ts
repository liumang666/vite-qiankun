import connection from './connect'
export type Callback<T> = (data: T) => void

const useSocket = (path = `/app/${localStorage.getItem('requestName')}/socket/ws/`) => {
  if (!connection.getSocket(path)) {
    connection.connect(path)
  }
  const unsubscribe = <T>(cb: Callback<T>) => {
    connection.unsubscribe(cb)
  }
  const subscribe = <T = any>(topic: string, cb: Callback<T>) => {
    connection.subscribe(topic, cb)
    return () => unsubscribe(cb)
  }
  return {
    send: <T>(msg: any, options?: { timeout?: number; topic?: string }) => {
      const topic = options?.topic || 'push_flow'
      return connection.watchOnce(topic, msg, options?.timeout, path)
    },
    subscribe,
  }
}

export default useSocket
