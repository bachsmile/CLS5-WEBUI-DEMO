import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'home page',
    to: { name: 'home' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: ' Test page',
    to: { name: 'test' },
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
