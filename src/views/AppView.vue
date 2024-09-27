<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container py-8">
      <div class="mb-8">
        <h1 class="text-2xl font-bold mb-4">Task 1. Tree Collapse</h1>
        <TreeCollapse :treeData="treeData"/>
      </div>

      <h1 class="text-2xl font-bold mb-4">Task 2. Dynamic Table</h1>
      <DynamicTable :data="tableData" :columns="columns">
        <template v-slot:tags="{ row }">
          <div class="flex space-x-2">
          <span
              v-for="(tag, tagIndex) in row.tags"
              :key="tagIndex"
              :class="tagClass(tag)"
              class="px-2 py-1 text-xs rounded-lg"
          >
            {{ tag }}
          </span>
          </div>
        </template>

        <template v-slot:action="{ row }">
          <a href="#" class="hover:underline text-blue-500">Invite</a> —
          <a href="#" class="hover:underline text-blue-500">{{ row.name || 'Unknown' }}</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:underline text-blue-500">Delete</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:underline text-blue-500">More actions</a>
        </template>
      </DynamicTable>
    </div>
  </div>
</template>

<script setup>
import TreeCollapse from '@/components/Tree/TreeCollapse.vue';
import DynamicTable from "@/components/Table/DynamicTable.vue";

const treeData = [
  {
    label: 'Models',
    children: [
      {
        label: 'Data warehouse',
        children: [
          {label: 'Report samples'},
          {label: 'Sales performance'}
        ]
      },
      {label: 'Statistics'}
    ]
  },
  {
    label: 'Lorem ipsum dolor',
    children: [
      {
        label: 'Sit amet, consectetur',
        children: [
          {label: 'adipisicing elit. Excepturi, impedit?'}
        ]
      }
    ]
  }
];

const columns = [
  {label: 'Name', key: 'name'},
  {label: 'Age', key: 'age'},
  {label: 'Address', key: 'address'},
  {label: 'Tags', key: 'tags'},
  {label: 'Action', key: 'action'},
];

const tableData = [
  {name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['NICE', 'DEVELOPER']},
  {name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['LOSER']},
  {name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['COOL', 'TEACHER']},
  {name: 'Alice White', age: 29, address: 'Berlin No. 5 Avenue', tags: ['INNOVATOR']},
];

const tagClass = (tag) => {
  switch (tag) {
    case 'NICE':
      return 'bg-green-100 text-green-600';
    case 'LOSER':
      return 'bg-red-100 text-red-600';
    case 'DEVELOPER':
      return 'bg-blue-100 text-blue-600';
    case 'COOL':
      return 'bg-green-200 text-green-700';
    case 'TEACHER':
      return 'bg-blue-200 text-blue-700';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};
</script>
