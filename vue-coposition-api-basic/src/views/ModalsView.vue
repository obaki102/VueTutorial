<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>Show dak modals?
        <input type="checkbox" v-model="showDarkModal"/>
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component v-model="showModal" title="My title 1" :is="showDarkModal ? ModalDark : Modal">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa laboriosam vero natus ut rerum quaerat,
        saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?</p>
    </component>

  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

/*
  modals
*/
const showDarkModal = ref(false)
const showModal = ref(false)

</script>

