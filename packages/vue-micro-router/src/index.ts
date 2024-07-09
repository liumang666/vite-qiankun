import { prefetchApps, AppMetadata } from 'qiankun'
import { App } from 'vue'
import MicroView from './micro-view/index.vue'

interface OptionType {
  apps: AppMetadata[]
}

const microRouter = {
  install: (app: App<any>, option?: OptionType) => {
    if (option?.apps) {
      prefetchApps(option.apps)
    }
  },
}

export { MicroView, microRouter }
