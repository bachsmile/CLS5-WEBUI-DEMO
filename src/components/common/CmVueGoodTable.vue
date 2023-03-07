<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'

export default {
  components: {
    VueGoodTable,
  },
  props: {
    columns: {
      type: Array,
      default: _ => [],
    },
    rows: {
      type: Array,
      default: _ => [],
    },
    styleClass: {
      type: String,
      default: 'vgt-table',
    },
    groupOptions: {
      type: Object,
      default: _ => ({}),
    },
    selectOptions: {
      type: Object,
      default: _ => ({
        enabled: true,
        selectOnlyOne: false,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true, // disable the select info panel on top
        selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
      }),
    },
    sortOptions: {
      type: Object,
      default: _ => ({
        enabled: true,
      }),
    },
    maxHeight: {
      type: Number,
      default: null,
    },
    fixedHeader: {
      type: Boolean,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    paginationOptions: {
      type: Object,
      default() {
        return {
          enabled: false,
        }
      },
    },
  },

  data() {
    return {
      tableColums: [],
    }
  },

  computed: {
    indeterminate() {
      if (this.groupOptions.enabled === true) {
        let count = 0
        this.rows?.forEach(element => {
          count += element.children.length
        })

        return (
          this.selectedRows
          && this.selectedRows.length > 0
          && this.selectedRows.length < count
        )
      }

      return (
        this.selectedRows
        && this.selectedRows.length > 0
        && this.selectedRows.length < this.rows.length
      )
    },
    selectedAll() {
      if (this.groupOptions.enabled === true) {
        let count = 0
        this.rows?.forEach(element => {
          count += element.children.length
        })

        return (
          this.selectedRows
          && this.selectedRows.length > 0
          && this.selectedRows.length === count
        )
      }

      return (
        this.selectedRows
        && this.selectedRows.length > 0
        && this.selectedRows.length === this.rows.length
      )
    },
    // eslint-disable-next-line sonarjs/cognitive-complexity
    selectedRows() {
      const selectedRows = []
      if (this.rows) {
        if (this.groupOptions.enabled === true) {
          this.rows?.forEach(element => {
            element.children?.forEach(child => {
              if (child.isSelected === true)
                selectedRows.push(child)
            })
            if (
              this.groupOptions.allowEmptySelect
              && this.groupOptions.allowEmptySelect === true && element.children.length === 0
                && element.isSelected === true
            )
              selectedRows.push(element)
          })
        }
        else {
          this.rows?.forEach(element => {
            if (element.isSelected === true)
              selectedRows.push(element)
          })
        }
      }

      return selectedRows
    },
  },

  watch: {
    selectedRows() {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('on-selected-rows-change', {
        selectedRows: this.selectedRows,
      })
    },
    columns: {
      deep: true,
      handler(val) {
        this.tableColums = [...this.columns]
        if (this.selectOptions.enabled === true) {
          this.tableColums.unshift({
            label: 'checkbox',
            field: 'checkbox',
            sortable: false,
            width: '50px',
            tdClass:
          this.selectOptions.vertialAlignTop
          && this.selectOptions.vertialAlignTop === true
            ? 'vertical-top'
            : '',
          })
        }

        const column = this.tableColums.find(
          x => x?.label?.toLowerCase() === 'action',
        )

        if (column) {
          column.sortable = false
          column.width = '50px'
          column.tdClass = 'btn-pd0'
        }
      },
    },
  },
  created() {
    this.tableColums = [...this.columns]
    if (this.selectOptions.enabled === true) {
      this.tableColums.unshift({
        label: 'checkbox',
        field: 'checkbox',
        sortable: false,
        width: '50px',
        tdClass:
          this.selectOptions.vertialAlignTop
          && this.selectOptions.vertialAlignTop === true
            ? 'vertical-top'
            : '',
      })
    }

    const column = this.tableColums.find(
      x => x?.label?.toLowerCase() === 'action',
    )

    if (column) {
      column.sortable = false
      column.width = '50px'
      column.tdClass = 'btn-pd0'
    }
  },
  // eslint-disable-next-line sonarjs/cognitive-complexity
  mounted() {
    const vgtResponsive = this.$refs['data-table'].$el.getElementsByClassName(
      'vgt-responsive',
    )

    if (vgtResponsive.length > 0) {
      vgtResponsive?.forEach(element => {
        if (element.classList.contains('position-static') !== true)
          element.classList.add('position-static')
      })
    }
    if (this.groupOptions.enabled === true) {
      const groupTh = this.$refs['data-table'].$el.getElementsByClassName(
        'vgt-row-header',
      )

      if (groupTh.length > 0) {
        groupTh?.forEach(element => {
          const content = element.getElementsByClassName('td-header-group')
          // eslint-disable-next-line sonarjs/no-collapsible-if
          if (content.length > 0) {
            if (element.classList.contains('position-static') !== true)
              element.classList.add('position-static')
          }
          const tbody = element.closest('tbody')
          if (tbody.classList.contains('body-group-content') !== true)
            tbody.classList.add('body-group-content')
        })
      }
    }
  },
  // eslint-disable-next-line sonarjs/cognitive-complexity
  updated() {
    const vgtResponsive = this.$refs['data-table'].$el.getElementsByClassName(
      'vgt-responsive',
    )

    if (vgtResponsive.length > 0) {
      vgtResponsive?.forEach(element => {
        if (element.classList.contains('position-static') !== true)
          element.classList.add('position-static')
      })
    }

    if (this.groupOptions.enabled === true) {
      const groupTh = this.$refs['data-table'].$el.getElementsByClassName(
        'vgt-row-header',
      )

      if (groupTh.length > 0) {
        groupTh?.forEach(element => {
          const content = element.getElementsByClassName('td-header-group')
          if (content.length > 0) {
            if (element.classList.contains('position-static') !== true)
              element.classList.add('position-static')
            const tbody = element.closest('tbody')
            if (tbody.classList.contains('body-group-content') !== true)
              tbody.classList.add('body-group-content')
          }
          else {
            const tbody = element.closest('tbody')
            if (tbody && tbody.classList.contains('body-group-content') !== true)
              tbody.classList.remove('body-group-content')
          }
        })
      }
    }
  },
  methods: {
    // thay đổi lựa chọn
    // eslint-disable-next-line sonarjs/cognitive-complexity
    selectedChange(value, data) {
      if (this.groupOptions.enabled === true) {
        this.rows?.forEach(element => {
          element.children?.forEach(child => {
            if (child.id === data.id)
              this.$set(child, 'isSelected', value)
          })
          // eslint-disable-next-line sonarjs/no-collapsible-if
          if (
            this.groupOptions.allowEmptySelect
            && this.groupOptions.allowEmptySelect === true
          ) {
            if (element.children.length === 0 && element.id === data.id)
              this.$set(element, 'isSelected', value)
          }
        })
      }
      else if (
        this.selectOptions.selectOnlyOne
        && this.selectOptions.selectOnlyOne === true
      ) {
        if (value === true)
          this.unselectedAll(data.originalIndex)

        this.$set(this.rows[data.originalIndex], 'isSelected', value)
      }
      else { this.$set(this.rows[data.originalIndex], 'isSelected', value) }
    },
    unselectedAll(index) {
      for (let i = 0; i < this.rows.length; i += 1) {
        if (i !== index)
          this.$set(this.rows[i], 'isSelected', false)
      }
    },

    // lựa chọn tất cả
    checkedAll(value) {
      if (this.groupOptions.enabled === true) {
        this.rows?.forEach(element => {
          element.children?.forEach(child => {
            this.$set(child, 'isSelected', value)
          })
          // eslint-disable-next-line sonarjs/no-collapsible-if
          if (
            this.groupOptions.allowEmptySelect
            && this.groupOptions.allowEmptySelect === true
          ) {
            if (element.children.length === 0)
              this.$set(element, 'isSelected', value)
          }
        })
      }
      else {
        this.rows?.forEach(element => {
          if (!(element.isDisabled && element.isDisabled === true))
            this.$set(element, 'isSelected', value)
        })
      }
    },

    // expanded all group table
    expandAll() {
      this.$refs['data-table'].expandAll()
    },

    // collapse all group table
    collapseAll() {
      this.$refs['data-table'].collapseAll()
    },
  },
}
</script>

<template>
  <div>
    <!--
      <div
      v-show="$isLoading() || isLoading"
      class="overflow-hidden loading-vue-good-table"
      >
      <BSkeletonTable
      :rows="5"
      :columns="4"
      :table-props="{ bordered: true, striped: true }"
      />
      </div>
    -->
    <!-- v-show="!$isLoading() || isLoading" -->
    <VueGoodTable
      ref="data-table"
      class="vue-good-table-data"
      mode="remote"
      :fixed-header="fixedHeader"
      :rows="rows"
      :columns="tableColums"
      :style-class="styleClass"
      :sort-options="sortOptions"
      :max-height="`${maxHeight}px`"
      :group-options="groupOptions"
      :pagination-options="paginationOptions"
      @on-sort-change="$emit('onSortChange', $event)"
    >
      <!-- Template empty table -->
      <template #emptystate>
        <div
          class="empty-table d-block"
        >
          <div class="w-100 d-flex align-items-center justify-content-center">
            <!--
              <BImg
              class="img-empty-table"
              fluid
              :src="$serverfile + $getThemeItem(6)"
              alt="empty table"
              />
            -->
          </div>
          <div class="w-100 d-flex align-items-center justify-content-center mt-75">
            <span>{{ $t("common.empty-table") }}</span>
          </div>
        </div>
      </template>
      <!-- Template table column -->
      <template
        #table-column="props"
      >
        <span
          v-if="
            props.column.label === 'checkbox'
              && selectOptions.selectOnlyOne
              && selectOptions.selectOnlyOne === true
          "
        />
        <BFormCheckbox
          v-else-if="props.column.label === 'checkbox'"
          :indeterminate="indeterminate"
          :checked="selectedAll"
          @change="checkedAll"
        />
        <slot
          v-else
          name="table-column"
          :row="props.row"
          :column="props.column"
          :index="props.index"
        />
      </template>
      <!-- Template table row -->
      <template
        #table-row="props"
      >
        <BFormCheckbox
          v-if="props.column.field === 'checkbox'"
          :checked="props.row.isSelected"
          :disabled="props.row.isDisabled && props.row.isDisabled === true"
          @change="selectedChange($event, props.row)"
        />
        <slot
          v-else
          name="table-row"
          :row="props.row"
          :column="props.column"
          :index="props.index"
        />
      </template>
      <!-- Template header of group row -->
      <template
        #table-header-row="props"
      >
        <BFormCheckbox
          v-if="
            groupOptions.allowEmptySelect
              && groupOptions.allowEmptySelect === true
              && props.column
              && props.column.field === 'checkbox'
          "
          :checked="props.row.isSelected"
          @change="selectedChange($event, props.row)"
        />
        <slot
          v-else
          name="table-header-row"
          :row="props.row"
          :column="props.column"
          :index="props.index"
        />
      </template>
    </VueGoodTable>
  </div>
</template>

<style lang="scss" scoped>
.loading-vue-good-table {
  margin-inline: -1.5rem;

  .table-bordered {
    border: unset;

    th:first-child {
      border-inline-start: unset;
    }

    th:last-child {
      border-inline-end: unset;
    }

    td:first-child {
      border-inline-start: unset;
    }

    td:last-child {
      border-inline-end: unset;
    }
  }
}

.vue-good-table-data {
  margin-inline: -1.5rem;
}

.empty-table {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-empty-table {
  block-size: 120px;
  margin-block-start: 30px;
}
</style>

<style lang="scss">
.btn-pd0 {
  button {
    padding: 0;
  }
}
</style>
