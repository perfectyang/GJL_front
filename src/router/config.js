import {
  Home,
  Login,
  Users,
  Article,
  NotFound,
  Setting,
  Modify
} from '../view'
// 注意路由顺序
const router = [
  {
    path: '/login',
    component: Login,
    auth: false
  },
  {
    path: '/users',
    component: Users,
    routes: [
      {
        path: '/users/setting',
        component: Setting,
      },
      {
        path: '/users/modify',
        component: Modify,
      }
    ]
  },
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/article',
        component: Article,
        auth:true
      }
    ]
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/',
    exact: true,
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/404'
  }
]

export default router