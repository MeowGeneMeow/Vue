<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import Sidebar from './components/Sidebar.vue'  

  import { ref } from 'vue'
</script>

<template>
  <Sidebar/>
  <div class="column">
    <div class="title">
      <p> Trackers </p>
    </div>
    <div>
      <img src="@/assets/seed_map.jpeg" alt="Member 1" class="system-img">
    </div>
  <div class="back-to-top" @click="scrollToTop">
    Back to Top
  </div>

</div> 
</template>
