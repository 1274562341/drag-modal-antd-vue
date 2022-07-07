<template>
  <div class="modal_box">
    <a-modal
      v-model:visible="visible"
      :title="title"
      @cancel="handleCancel"
      :getContainer="getContainer"
      :mask="false"
      :maskClosable="false"
      :footer="null"
      :width="800"
    >
      <slot />
    </a-modal>
  </div>
</template>

<script setup>
import { defineComponent, ref, defineExpose, nextTick, reactive } from "vue";
import drag from "./hook/drag";
const props = defineProps({
  // 弹窗标题
  title: {
    type: String,
    default: "标题",
  },
  //弹窗头部颜色
  headColor: {
    type: String,
    default: "#fff",
  },
  //弹窗头部文字及按钮颜色
  textColor: {
    type: String,
    default: "#fff",
  },
});
let title = ref(props.title);

const visible = ref(false);

const showModal = () => {
  visible.value = true;
  nextTick(() => {
    drag.drag_fun(".ant-modal-header", ".ant-modal");
  });
};
const getContainer = () => {
  return document.querySelector(".modal_box");
};
const emit = defineEmits(["handleCancelEmit"]);
const handleCancel = (e) => {
  emit("handleCancelEmit");
  visible.value = false;
};
defineExpose({ showModal });
</script>
<style lang="less" scoped>
:deep(.ant-modal-mask) {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
:deep(.ant-modal-wrap) {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-modal {
    position: absolute !important;
    .ant-modal-header {
      background-color: v-bind(headColor) !important;
      padding: 10px 24px;
      .ant-modal-title {
        color: v-bind(textColor) !important;
      }
    }
    .ant-modal-body {
      padding: 8px;
    }
    .ant-modal-close-x {
      height: 43px;
      line-height: 43px;
      .ant-modal-close-icon {
        color: v-bind(textColor) !important;
      }
    }
  }
}
</style>
