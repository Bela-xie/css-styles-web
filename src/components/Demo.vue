<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";

const modalOpen = ref(false);
function openModal() {
  modalOpen.value = true;
}
const props = defineProps({
  component: Object,
  sourceCode: String,
});
</script>

<template>
  <div class="wrapper" @click="openModal">
    <Component :is="component" />
  </div>
  <Modal
    :isOpen="modalOpen"
    :content="sourceCode"
    @close-modal="modalOpen = false"
  />
</template>

<style>
.wrapper {
  height: 100px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.wrapper:hover {
  background-color: #343434;
  cursor: pointer;
}
</style>