<script setup lang="ts">
import { inject } from 'vue'
import CmAlert from '@/components/common/CmAlerts.vue'

interface globaleInterface {
  isRender: boolean
  changeValue(key: any, value: any): void
}
const global = inject('globals') as globaleInterface
const { isRender, changeValue } = global
</script>

<template>
  <div>
    <button @click="changeValue('isRender', false)">
      a
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
  </div>
</template>

