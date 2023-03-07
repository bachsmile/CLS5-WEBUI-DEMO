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
  {
    title: 'Report',
    to: { name: 'report-user' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'validate',
    to: { name: 'validateFile' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'tree',
    to: { name: 'tree' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'guilde',
    to: { name: 'guilde' },
    icon: { icon: 'tabler-file' },
    children: [
      { title: 'List', to: 'apps-invoice-list' },
      { title: 'Preview', to: { name: 'apps-invoice-preview-id', params: { id: '5036' } } },
      { title: 'Edit', to: { name: 'apps-invoice-edit-id', params: { id: '5036' } } },
      { title: 'Add', to: 'apps-invoice-add' },
    ],
  },
] as VerticalNavItems
