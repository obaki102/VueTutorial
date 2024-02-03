import { computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, reactive, watch, nextTick } from 'vue'

export function useCounter(){
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
    nextTick(() => {
      console.log('nextTick')
    })
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

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter

  }
}