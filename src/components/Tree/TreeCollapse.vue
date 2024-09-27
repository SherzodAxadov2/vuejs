<template>
  <div class="md:min-w-[40%] max-w-[70%] p-4 bg-gray-50 rounded-lg shadow-lg">
    <ul>
      <TreeNode
          v-for="(node, index) in treeData"
          :key="index"
          :node="node"
      />
    </ul>
    <div> </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import TreeNode from './TreeNode.vue';

const props = defineProps({
  treeData: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
</style>
