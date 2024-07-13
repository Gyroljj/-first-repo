// 1. 定义store结构

import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

// 2. 实现需求

export const useChannelStore = defineStore('channel', () => {
  // 定义类型
  type Channel = {
    id: number
    name: string
  }

  type ResData = {
    data: {
      channels: Channel[]
    },
    message: string
  }

  // 2. 定义响应数据 (state)
  const list = ref<Channel[]>([])

  // 3. axios获取数据 (异步action)
  const getList = async () => {
    const { data: res } = await axios.request<ResData>({
      url: 'http://geek.itheima.net/v1_0/channels'
    })
    list.value = res.data.channels
  }

  // 重要
  return {
    list,
    getList
  }
})