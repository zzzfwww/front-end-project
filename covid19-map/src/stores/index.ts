import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject,ChinaTotal,Children} from './type'




export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd:<ChinaTotal>{},
    chinaTotal:<ChinaTotal>{},
    cityDetail:<Children[]>[],
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result;
      this.chinaAdd = this.list.chinaTotal
      this.chinaTotal = this.list.chinaTotal
      this.cityDetail = this.list.areaTree[2].children.slice(0,16)
    }
  }
})
