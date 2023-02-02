<script setup lang="ts">
import CmAvatars from '@/components/common/CmAvatars.vue'

interface State {
  noData?: string
}
console.log(document.getElementById('bach'))

const handleChose = () => {
  console.log(document.getElementById('bach'))
}

onMounted(() => {
  console.log(document.getElementById('bach'))
})
console.log(document.getElementById('bach'))
</script>

<template>
  <div>
    <VCard
      id="bach"
      title="  Test page 🙌"
      @click="handleChose"
    >
      <VCardText>  Test page.</VCardText>
      <VCardText>
        Test page
      </VCardText>
      <CmAvatars />
    </VCard>
  </div>
</template>

