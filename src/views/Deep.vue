<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import Sidebar from '../components/Sidebar.vue'  

  import { ref } from 'vue'
</script>

<template>
    <Sidebar/>
    <div class="row">
      <div class = "column">
        <div class="title">
          <p> Seed Map </p>
        </div>
        <div>
          <img src="../assets/seed_map.jpg" alt="Seed Map" class="system-img">
        </div>
      </div>
      
      <div class = "column">
        <div class="title">
          <p> Hit Map </p>
        </div>
        <div>
          <img src="../assets/Hit_map.png" alt="Hit Map" class="system-img">
        </div>
      </div>
    </div>  

    <div class="row">
      <div class = "column">
        <div class="title">
          <p> Umatrix Map </p>
        </div>
        <div>
          <img src="../assets/Umatrix_map.jpg" alt="Umatrix Map" class="system-img">
        </div>
      </div>
      
      <div class = "column">
        <div class="title">
          <p> Airflow Scheduling </p>
        </div>
        <div>
          <img src="../assets/Airflow.jpg" alt="Airflow Scheduling" class="system-img">
        </div>
      </div>
    </div>  




    <div class="back-to-top" @click="scrollToTop">
      Back to Top
    </div>
    
</template>

<style scoped>

.column {
  flex-direction: column; /* 设置为横向排列 */
  margin-top: 80px; /* 調整上邊距的值以增加空間 */
  margin-left: 80px;
}

.row {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: row; /* 设置为横向排列 */
  margin-top: 40px; /* 調整上邊距的值以增加空間 */
  
}

.title{
  text-align: center;  /* 文本居中对齐 */
  background-color: gray; /* 背景颜色 */
  color: #fff; /* 文本颜色 */
  padding: 20px; /* 内边距 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 文本阴影 */
  font-size: 30px; /* 字体大小 */
  font-family: 'Arial', sans-serif; /* 字体样式 */
  letter-spacing: 2px; /* 字母间距 */
  border-radius: 10px; /* 边框圆角 */
  margin-top: 60px;
}

.system-img{
  margin-top: 20px; /* 調整上邊距的值以增加空間 */
  margin-bottom: 60px;
  width: 600px;
  height: 400px;
  justify-content: center;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.back-to-top:hover {
  background-color: #0056b3;
}

</style>
