import axios from 'axios'
import { $axios } from '@/utils/axios'

export default class ApiUtil {
    static get(url, params) {
        const config = params ? { params } : {}
        return $axios.get(url, config).then((response) => {
            if (params && params.__paging) {
                if (params._mock) {
                    const {
                        'x-total-count': totalCount
                    } = response.headers
                    /**
                     *  response.headers = {
                     * x-total-count: value
                     * }
                     */
                    return {
                        data: response.data,
                        serverPaging: Number(totalCount)
                    }
                }
                else {
                    const { 'server-paging': encodedServerPaging } = response.headers
                    const serverPaging = Buffer.from(encodedServerPaging, 'base64').toString()
                    return {
                        data: response.data,
                        serverPaging: JSON.parse(serverPaging)
                    }
                }
            }
            return response.data
        })
    }

    static post(url, data) {
        return $axios.post(url, data).then((response) => {
            return response.data
        })
    }

    static postFile(url, params) {
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        return $axios.post(url, params, config).then((response) => {
            return response.data
        })
    }

    static put(url, data) {
        return $axios.put(url, data).then((response) => {
            return response.data
        })
    }

    static delete(url, params) {
        const config = params ? { params } : {}
        return $axios.delete(url, config, { data: params }).then((response) => {
            return response.data
        })
    }

    static deleteFile(url, params) {
        return $axios.delete(url, config, { data: params }).then((response) => {
            return response.data
        })
    }

    static uploadFile(url, params) {
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        return $axios.post(url, params, config).then((response) => {
            const data = response.data
            return JSON.parse(data.substring(5, data.indexOf('</ret>')))
        })
    }

    static downloadFile(url, params) {
        const config = params ? { params } : {}
        return $axios.get(url, { responseType: 'arrayBuffer', ...config }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', params.fileOriginName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            link.remove()
        })
    }

    static downloadFileEncodingBase64(url, params) {
        const config = params ? { params } : {}
        return $axios.get(url, config, { header: { responseType: 'blob' } }).then((response) => {
            const buffer = Buffer.from(response.data, 'base64')
            const arrayBuffer = Uint8Array.from(buffer)
            const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' })
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', params.fileOriginName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            link.remove()
        })
    }

    
    static getJSON(path) {
        return $axios.get(path).then((response) => {
            return response.data
        })
    }

    static getHtml(path) {
        return $axios.get(path).then((response) => {
            return response.data
        })
    }
}