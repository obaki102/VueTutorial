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
    <p>TThis counterb is {{ oddOrEven }}</p>
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
import { ref, computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, reactive, watch } from 'vue'
import {vAutofocus } from '@/directives/vAutofocus'

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
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(() => counterData.count, (newCount) => {
  if (newCount == 20)
    alert('20 reach')
})

const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd');
const increaseCounter = value => {
  counterData.count += value
}

const decreaseCounter = value => {
  counterData.count -= value
}

onMounted(() => {
  console.log('Stuff related to counter')
})
onBeforeMount(() => {
  console.log('onBeforeMount')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})


onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

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
</style>