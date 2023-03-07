import { _ } from '../LodashUtil'
import RegExps from '@/constant/RegExps'

export default class StringUtil {
  /**
   * @name: bỏ dấu tiếng việt (ex: tiếng việt => tieng viet)
   * @param str
   * @return {string}
   */
  static removeAccents = (str: string) => {
    const AccentsMap = RegExps['lang-vi']

    for (let i = 0; i < AccentsMap.length; i += 1) {
      const re = new RegExp(`[${AccentsMap[i].substr(1)}]`, 'g')
      const char = AccentsMap[i][0]

      str = str.replace(re, char)
    }

    return str
  }
}
