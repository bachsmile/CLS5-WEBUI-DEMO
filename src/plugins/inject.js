export const config = {
  name: 'Config',
  static_URL: global.location?.host
}
export default ({ app }, inject) => {
  inject('config', config)
}