<script setup lang="ts">
import { inject } from 'vue'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// default
interface globaleInterface {
  isRender: boolean
  isLoading: boolean
  changeValue(key: any, value: any): void
}

const global = inject('globals') as globaleInterface
const { isRender, changeValue } = global

const { syncInitialLoaderTheme, syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme, isAppRtl } = useThemeConfig()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <VApp>
      <VMain>
        <RouterView />
        <div style="position: absolute; top: 50%; left: 40%;">
          {{ isRender }}
        </div>

        <button
          style="position: absolute; top: 50%; left: 50%;"
          @click="changeValue('isRender', false)"
        >
          ẩn
        </button>

        <button
          style="position: absolute; top: 50%; left: 60%;"
          @click="changeValue('isRender', true)"
        >
          mở
        </button>
      </VMain>
    </VApp>
  </VLocaleProvider>
</template>
