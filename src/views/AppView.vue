<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container py-8">
      <div class="mb-8">
        <h1 class="text-2xl font-bold mb-4">Task 1. Tree Collapse</h1>
        <TreeCollapse :treeData="treeData"/>
      </div>

      <h1 class="text-2xl font-bold mb-4">Task 2. Dynamic Table</h1>
    </div>
  </div>
</template>

<script setup>
import TreeCollapse from '@/components/Tree/TreeCollapse.vue';

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
</script>
