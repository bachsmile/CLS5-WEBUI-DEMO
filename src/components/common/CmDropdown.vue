<template>
  <div class="dropdowns">
    <div class="dropdowns__btn">
      <nuxt-link :to="dropdown.txtBtn.link">
        {{ dropdown.txtBtn.drop }}
      </nuxt-link>
      <slot></slot>
    </div>
    <div v-if="dropdown.txtItem != null" class="dropdowns__content">
      <div
        v-for="(item, i) in dropdown.txtItem"
        :key="i"
        class="dropdowns__item"
        @click="$emit(item.event ? item.event : '')"
      >
        <nuxt-link
          v-if="item.link"
          class="textWhite fullWith dropdowns__item__link"
          :to="item.link"
        >
          <span>{{ item.item }}</span>
        </nuxt-link>
        <a v-else class="textWhite fullWith dropdowns__item__link">
          {{ item.item }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
  },
}
</script>
