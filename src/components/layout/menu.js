export default [
  {
    name: '主页管理',
    icon: 'user',
    url: '/home',
    children: [{
      name: '文章内容',
      url: '/home/article'
    }]
  },
  {
    name: '用户中心',
    icon: 'user',
    url: '/users',
    children: [
      {
        name: '修改用户',
        url: '/users/modify'
      },
      {
        name: '添加用户',
        url: '/users/setting'
      },
      {
        name: '设置中心',
        url: '/users/list'
      }
    ]
  }
]