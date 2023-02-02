
import RegExps from "~/constant/RegExps"
export default class ValidationUtil {
    /**
     * @return {boolean}
     */
    static formatNumber(param) {
        return RegExps.Number(param)
    }

    /**
     * @return {Boolean}
     */
    static chkBdayYYYYMMDD(bday) {
        const val = bday.trim()
        const regExp = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
        if (val.length !== 8 || !regExp.test(val)) return false
        return true
    }
}