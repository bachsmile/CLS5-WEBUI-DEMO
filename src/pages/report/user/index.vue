<script setup lang="ts">
import { inject } from 'vue'

// import Treeview from 'vue3-treeview'
import CmAlert from '@/components/common/CmAlerts.vue'
import CmCards from '@/components/common/CmCards.vue'
import CmTabs from '@/components/common/CmTabs.vue'
import '@/utils/news/ArrayUtil'
import '@/typescript/interface'
import { _ } from '@/utils/LodashUtil'
import ObjectUtil from '@/utils/news/ObjectUtil'
import 'vue3-treeview/dist/style.css'
import Tree from '@/components/page/vue-tree.jsx'

// config global
interface globaleInterface {
  isRender: boolean
  changeValue(key: any, value: any): void
}
const global = inject('globals') as globaleInterface
const { isRender, changeValue } = global

const obj = {
  name: 'John',
  age: null,
  age1: 1,
  address: {
    city: 'New York',
    state: null,
    state3: 'New York1',
    state4: 55,
    state5: {
      a: null,
      b: '',
      b1: 0,
      b12: {
        a: null,
        b: '',
        b1: 0,
        b12: '0',
        c: undefined,
        d: 5656,
        f: 'adsada',
      },
      c: undefined,
      d: 5656,
      f: 'adsada',
    },
  },
}

const { t } = window.i18n()

const log = (s: any) => {
}
</script>

<template>
  <div>
    {{ t("UI Elements") }}

    <button @click="changeValue('isRender', false)">
      reset
    </button>
    {{ isRender }}
    <CmAlert
      title="bach"
      :width="100"
    >
      <template #title="title">
        {{ title }}
      </template>
    </CmAlert>

    <CmCards
      title="Tab"
    >
      <template #text>
        <CmTabs />
      </template>
    </CmCards>
  </div>
  31231
  <Tree />
</template>

