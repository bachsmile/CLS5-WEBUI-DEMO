<script setup lang="ts">
import { inject } from 'vue'
import { setWindowDefineProperty } from '@/utils/Global'
import vuetify from '@/plugins/vuetify'

// test global publich const property
// window.const1 = 6666
// window.const2 = 7777

// test global publich react property
window.reactive1 = 1111
window.reactive2 = ref('22222')
window.reactive2.value = '33333'
window.token = ref('3313123')

// console.log(window)
// console.log(window.token.value)

// test global private const property
const _: _.LoDashStatic = inject('lodash') as never // sẽ recomment code

// const _: any = inject('lodash') // không recomment code
// console.log(_.isArray([12]))
// console.log(_.isEmpty(''))

// console.log(window._.isArray(12))
</script>

<template>
  <div>
    <VCard title="Create Awesome 🙌">
      <VCardText>This is your second page.</VCardText>
      <VCardText>
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
        wafer tart marzipan bonbon. Gingerbread jelly-o dragée
        chocolate.
      </VCardText>
    </VCard>
  </div>
</template>
