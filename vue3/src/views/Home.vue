<template>
  <div class="home">
    <About
      :name="sendData.val"
      @name-changed=changeName
    >
      世界变化不停，人潮川流不息
    </About>
  </div>
</template>
<script>
import { reactive } from 'vue'
import About from './About'
export default {
  components: {
    About
  },
  setup () {
    const sendData = reactive({
      val: 'sendData'
    })

    setTimeout(() => {
      sendData.val += 1
    }, 1000)

    function changeName () {
      console.log('事件传送出来了')
    }
    return {
      sendData,
      changeName
    }
  }
}
</script>
