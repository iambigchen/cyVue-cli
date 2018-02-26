export default{
  path: 'demo',
  name: 'demo',
  meta: {
    title: 'demo'
  },
  component: resolve => require(['@/components/demo/demo'], resolve)
}
