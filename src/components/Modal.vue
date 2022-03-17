<script setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";
import SuccessIcon from "./SuccessIcon.vue";
import useClipboard from "vue-clipboard3";
import { ref } from "vue";

const { toClipboard } = useClipboard();

const isHtmlCopied = ref(false);
const isCssCopied = ref(false);

const props = defineProps({
  isOpen: Boolean,
  content: String,
});
defineEmits(["closeModal"]);

const htmlCode = computed(() => {
  return props.content.trim().slice(10).split("</template>")[0];
});

const cssCode = computed(() => {
  return props.content.trim().split("<style scoped>")[1].slice(0, -8);
});

const copyHtmlCode = async () => {
  try {
    await toClipboard(htmlCode.value);
    isHtmlCopied.value = true;
    isCssCopied.value && (isCssCopied.value = false);
  } catch (e) {
    console.error(e);
  }
};

const copyCssCode = async () => {
  try {
    await toClipboard(cssCode.value);
    isCssCopied.value = true;
    isHtmlCopied.value && (isHtmlCopied.value = false);
  } catch (e) {
    console.error(e);
  }
};
</script>

<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal">
      <div class="title">
        <strong>html代码：</strong>
        <div class="copy" @click="copyHtmlCode">
          <strong>COPY</strong>
          <SuccessIcon v-if="isHtmlCopied" />
        </div>
      </div>
      <div class="code htmlCode">
        <code id="htmlCode">{{ htmlCode }}</code>
      </div>
      <div class="title">
        <strong>css代码：</strong>
        <div class="copy" @click="copyCssCode">
          <strong>COPY</strong>
          <SuccessIcon v-if="isCssCopied" />
        </div>
      </div>
      <div class="code cssCode">
        <code id="cssCode">{{ cssCode }}</code>
      </div>
      <button @click="$emit('closeModal')">Close</button>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: #fff;
  padding: 0px 8px;
}
button {
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 50px;
  border: none;
  background: #85beed;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-top: 20px;
}
.copy {
  cursor: pointer;
  display: flex;
}
.iconWrap {
  width: 20px;
}
.code {
  overflow-y: scroll;
}
.code::-webkit-scrollbar {
  width: 0 !important;
}

.htmlCode {
  height: 40px;
}
.cssCode {
  height: 210px;
}
</style>