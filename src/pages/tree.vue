<script>
import treeview from 'vue3-treeview'
import 'vue3-treeview/dist/style.css'

export default {
  components: {
    Tree: treeview,
  },
  data() {
    return {
      modeBool: false,
      config: {
        roots: ['id1', 'id2', 'id3'],
        keyboardNavigation: false,
        dragAndDrop: false,
        checkboxes: true,
        editable: false,
        disabled: false,
        padding: 25,
      },
      nodes: {
        id1: {
          text: 'text1',
          children: ['id11', 'id12', 'id13'],
        },
        id11: {
          text: 'text11',
          children: ['id111', 'id112', 'id113'],
        },
        id111: {
          text: 'id111',
        },
        id112: {
          text: 'id112',
        },
        id113: {
          text: 'id113',
        },
        id12: {
          text: 'text12',
          children: [],
        },
        id13: {
          text: 'text13',
          children: ['id131', 'id132'],
        },
        id131: {
          text: 'text131',
        },
        id132: {
          text: 'text132',
        },
        id2: {
          text: 'text2',
          children: ['id21', 'id22'],
        },
        id21: {
          text: 'text21',
          children: ['id211', 'id212'],
        },
        id211: {
          text: 'id211',
        },
        id212: {
          text: 'id212',
        },
        id22: {
          text: 'text12',
          children: [],
        },
        id3: {
          text: 'text3',
        },
      },
    }
  },
  methods: {
    changeMode() {
      this.modeBool = !this.modeBool
      this.config.checkMode = this.modeBool ? 0 : 1
    },
  },
}
</script>

<template>
  <p>
    <label for="showCheckBoxes">Checkboxes</label>
    <input
      id="showCheckBoxes"
      v-model="config.checkboxes"
      type="checkbox"
    >

    <label for="padding"> | Padding</label>
    <input
      id="padding"
      v-model.number="config.padding"
      type="number"
    >

    <label for="editable"> | Editable</label>
    <input
      id="editable"
      v-model="config.editable"
      type="checkbox"
    >

    <label for="disabled"> | Disabled</label>
    <input
      id="disabled"
      v-model="config.disabled"
      type="checkbox"
    >

    <label for="keyboardNavigation"> | Keyboard Navigation</label>
    <input
      id="keyboardNavigation"
      v-model="config.keyboardNavigation"
      type="checkbox"
    >

    <label for="DragandDrop"> | DragandDrop</label>
    <input
      id="DragandDrop"
      v-model="config.dragAndDrop"
      type="checkbox"
    >

    <label for="checkMode"> | Checkmode auto</label>
    <input
      id="checkMode"
      type="checkbox"
      :value="modeBool"
      @input="changeMode"
    >
  </p>

  <Tree
    :config="config"
    :nodes="nodes"
  />
</template>

