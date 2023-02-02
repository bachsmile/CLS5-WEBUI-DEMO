import dayjs from 'dayjs'
import Globals from '~/constant/Globals'

export default class DateUtil {
    /**
     * @return {string}
     */
    static convertFormat(date, format = Globals.Date_FORMAT) {
        return dayjs(date).format(format)
    }
}
