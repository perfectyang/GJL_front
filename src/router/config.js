import { lazy } from 'react'
const Home = lazy(() => import('../view/home'))
const Article = lazy(() => import('../view/home/article'))
const Users = lazy(() => import('../view/users'))
const Setting = lazy(() => import('../view/users/setting'))
const Modify = lazy(() => import('../view/users/modify'))
const NotFound = lazy(() => import('../view/404'))
const Login = lazy(() => import('../view/login'))
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