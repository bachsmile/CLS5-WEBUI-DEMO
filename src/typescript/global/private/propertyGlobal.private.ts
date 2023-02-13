import type _ from 'lodash'

const global = (app: any) => {
  const { globalProperties } = app.config
  interface globalPrivateProperty {
    longitude: number
    lodash: _.LoDashStatic
  }

  const listGlobalPrivate: globalPrivateProperty = {
    // khai báo biến global
    longitude: 90,
    lodash: app.config.globalProperties.$lodash,
  }

  // Hàm đăng ký
  globalProperties.$lodash.forEach(listGlobalPrivate, (value: any, key: any) => {
    app.provide(key, value)
  })
}

export default global
