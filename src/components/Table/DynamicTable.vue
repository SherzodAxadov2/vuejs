<template>
  <div class="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
    <table class="table-auto w-full text-left border-collapse">
      <thead class="bg-gray-50">
      <tr>
        <th v-for="(column, index) in columns" :key="index" class="px-6 py-3 font-semibold border-b text-gray-600">
          {{ column.label }}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:bg-gray-50 transition duration-200 ease-in-out">
        <td
            v-for="(column, colIndex) in columns"
            :key="colIndex"
            class="px-6 py-4 border-b"
            :class="{'!border-0': rowIndex === data.length - 1}"
        >
          <slot :name="column.key" :row="row">
            {{ row[column.key] || '--' }}
          </slot>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<style>
table {
  width: 100%;
  border-spacing: 0;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}

a {
  cursor: pointer;
}
</style>
