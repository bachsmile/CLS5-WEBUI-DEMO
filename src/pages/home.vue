<script>
import Treeselect from 'vue3-treeselect'

// import the styles
import 'vue3-treeselect/dist/vue3-treeselect.css'

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define the default value
      value: null,

      // define options
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        }],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      }],
    }
  },
}
</script>

<template>
  <div id="app">
    <Treeselect
      v-model="value"
      :multiple="true"
      :options="options"
    />
  </div>
</template>
