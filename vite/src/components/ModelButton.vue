<template>
  <div class="modelbutton">
    <button @click="modalOpen = true">
      弹出一个全屏模态窗口</button>
      <!-- 系统内部全局组件 弹出窗口 -->
    <teleport to="body">
      <!-- 挂载到body上 与 class="app" 平级 -->
      <div
        v-if="modalOpen"
        class="modal"
      >
        <div>
          这是一个模态窗口!
          我的父元素是"body"！
          <button @click="modalOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>

</template>

<script>
export default {
  data () {
    return {
      modalOpen: false
    }
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>