/*
 * @Author: fireliangjiang fireliangjiang@gmail.com
 * @Date: 2024-09-23 16:51:38
 * @LastEditors: fireliangjiang fireliangjiang@gmail.com
 * @LastEditTime: 2024-09-23 18:53:33
 * @FilePath: \vue3-project\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
