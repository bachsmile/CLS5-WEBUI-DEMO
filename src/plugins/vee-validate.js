import { configure, extend } from "vee-validate"
import * as rules from "vee-validate/dist/rules"
import { messages } from '~/locales/ko.json'
import ValidationUtil from "~/utils/ValidationUtil"


const config = {
    classes: {
        valid: 'is-valid',
        inValid: ['is-invalid', 'is-err']
    },
    bails: true,
    skipObtional: true,
    mode: 'aggressive',
    useConstrainAttrs: true
}

configure(config)

Object.keys(rules).forEach((rule) => {
    extend(rule, {
        ...rule[rule],
        message: messages[rule]
    })
})

extend('bdateFormat', {
    validate: (value) => {
        return ValidationUtil.chkBdayYYYYYMMDD(value)
    }
})