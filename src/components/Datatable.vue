<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  columns: {
    type: Object,
    required: true,
  },
  data: {
    type: Object as PropType<any[]>,
    required: true,
  },
});
</script>

<template>
  <table class="w-full text-sm text-left text-gray-700 mt-4">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th
          scope="col"
          class="px-6 py-3"
          v-for="col in props.columns"
          :key="col"
        >
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="bg-white border-b"
        v-for="(row, rowIndex) in props.data"
        :key="rowIndex"
      >
        <td
          v-for="(col, colName) in props.columns"
          :key="colName"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {{ row[colName] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
