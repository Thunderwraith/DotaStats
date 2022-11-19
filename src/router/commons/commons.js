import Main from '@layout/Main.vue'

const COMMON_ROUTES = [
  {
    component: Main,
    path: '/',
    name: 'main',
  },
  {
    component: () => import('@layout/Spage.vue'),
    path: '/heroes',
    name: 'heroes',
  },
  {
    component: () => import('@layout/Hero.vue'),
    path: '/hero',
    name: 'hero',
    children: [
      {
        path: ':name',
        name: 'single-hero',
        component: () => import('@layout/Hero.vue'),
      },
    ],
  },
]

export default COMMON_ROUTES