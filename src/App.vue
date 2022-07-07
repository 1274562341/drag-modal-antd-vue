<template>
  <div class="app">
    <a-button type="primary" @click="showModal">可以拖拽的弹窗</a-button>
    <MyModal
      ref="mymodal_ref"
      :title="'可拖拽弹窗'"
      :headColor="'rgb(24, 144, 255)'"
      @handleCancelEmit="handleCancelEmit"
    >
      <div class="my_context"></div>
    </MyModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyModal from "./components/Modal/MyModal.vue";
components: {
  MyModal;
}
let mymodal_ref = ref();
const showModal = () => {
  mymodal_ref.value.showModal();
};
const handleCancelEmit = () => {
  console.log("handleCancelEmit");
};
</script>
<style lang="less" scoped>
.app {
  text-align: left !important;
  .my_context {
    height: 500px;
  }
}
</style>
