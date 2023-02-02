import _isEmpty from 'lodash/isEmpty'
import _isString from 'lodash/isString'
import _indexOf from 'lodash/indexOf'

export default class ObjectUtil {
    /**
     * @param value
     * @return {boolean|boolean}
     */
    static isEmpty(value) {
        return (
            value === undefined ||
            value === null ||
            (typeof value === 'object' && _isEmpty(value)) ||
            (typeof value === 'string' && value.trim().length === 0)
        )
    }


    /**
         * @param value
         * @return {boolean}
         */
    static isNotEmpty(value) {
        return !this.isEmpty(value)
    }

    /**
         * @param value
         * @param defaultValue
         * @return {string}
         */
    static nvl(value, defaultValue) {
        if (this.isEmpty(value)) {
            return defaultValue
        }
        return value
    }

    /**
         * @param value
         * @return {boolean}
         */
    static isArray(value) {
        return !!value && value.constructor === Array
    }

    /**
         * @param value
         * @return {boolean}
         */
    static isTrue(value) {
        const areTrue = ['yes', 'true', true, 'y', 1, '1']
        if (_isString(value)) {
            value = value.toLowerCase()
        }
        if (_indexOf(areTrue, value) > -1) {
            return true
        }
        return false
    }
}