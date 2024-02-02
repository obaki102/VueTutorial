<template>
  <teleport to=".modals-container">
    <div class="modal" v-if="modelValue">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div class="user-data">
        {{ userData.name }} @ {{ userData.username }}
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from 'vue';


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

const userData = inject('userData')

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
.modal {
  background: black;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>