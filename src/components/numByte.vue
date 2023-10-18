<template>
    <div>
      <h1 style="white-space: nowrap;">今日偵測到的惡意封包</h1>
      <div class="countingNum">
        <p v-if="counting">{{ currentCount }}</p>
      </div>
      
      <button class="custom-button" @click="startCounting">
        Start Counting
    </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counting: true,
        currentCount: 0,
        targetCount: 100, // 指定的目标数字
      };
    },
    methods: {
      startCounting() {
        this.counting = true;
        this.count();
      },
      count() {
        if (this.currentCount < this.targetCount) {
          setTimeout(() => {
            this.currentCount++;
            this.count();
          }, 0.1); // 1秒钟自动加一
        } else {
          
          this.currentCount = this.targetCount;
        }
      },
    },
  };
  </script>
  
<style>
    .countingNum{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 30px;
    }

    .custom-button {
        background-color: #007bff; /* 自定义背景颜色 */
        color: white; /* 自定义文字颜色 */
        font-weight: 900;
        padding: 10px 20px; /* 自定义内边距 */
        border: none; /* 移除边框 */
        border-radius: 5px; /* 添加圆角 */
        cursor: pointer; /* 鼠标指针样式 */
        
    }
</style>