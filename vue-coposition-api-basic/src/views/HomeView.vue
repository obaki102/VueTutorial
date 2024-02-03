<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">-2</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">+2</button>
    </div>
    <p>TThis counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>
  </div>
</template>

<script setup>
/*
Import
*/
import { ref, onMounted } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'

/*
App title
*/
const appTitle = 'My App'
const appTitleRef = ref(null)
onMounted(() => {
  console.log(appTitleRef.value.offsetWidth)
})

/*
Counter
*/
const { counterData, oddOrEven, 
    increaseCounter, decreaseCounter } = useCounter()

</script>



<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px
}

.edt {
  margin-top: 60px;
}
</style>@/use/useCounter