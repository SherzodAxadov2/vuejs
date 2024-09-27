<template>
  <li class="mb-2">
    <div
        @click="toggleCollapse"
        class="cursor-pointer p-3 flex-between bg-white hover:bg-blue-50 rounded-md shadow transition duration-200"
    >
      <div class="flex-y-center">
        <svg v-if="hasChildren"
             class="w-4 h-4 mr-2 transform transition-transform duration-300"
             :class="{ 'rotate-90': !collapsed }"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span class="text-gray-700 font-semibold">{{ node.label }}</span>
      </div>

      <div class="flex-y-center space-x-2">
        <button @click.stop="editNode" class="text-sm text-blue-500 hover:text-blue-600">Edit</button>
        <button @click.stop="deleteNode" class="text-sm text-red-500 hover:text-red-600">Delete</button>
      </div>
    </div>

    <ul v-if="!collapsed" class="pl-6 mt-2 border-l-4 border-blue-200 duration-200">
      <TreeNode
          v-for="(child, index) in node.children"
          :key="index"
          :node="child"
      />
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true,
  }
});

const collapsed = ref(true);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

const hasChildren = props.node.children && props.node.children.length > 0;

// Optional actions: edit, delete
const editNode = () => {
  alert(`Edit node: ${props.node.label}`);
};

const deleteNode = () => {
  alert(`Delete node: ${props.node.label}`);
};
</script>

<style scoped>
/* Add custom styles here */
</style>
