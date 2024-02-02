<template>
  <teleport to=".modals-container">
    <div class="modal-dark" v-if="modelValue">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
    </div>
  </teleport>
</template>

<script setup>

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'No title'
  }
})

/*
  emits
*/

const emit = defineEmits(['update:modelValue'])
/*
const handleButtonClick = () => {
  emit('update:modelValue', false)
}
*/

</script>
<style>
.modal-dark {
  background: blue;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>