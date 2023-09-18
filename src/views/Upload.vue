<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue'

    const handleFileChange = (event) => {
    // 處理文件選擇，可以調用上傳函數並傳入選擇的文件
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleDrop = (event) => {
        event.preventDefault()
        const files = event.dataTransfer.files
        // 在這裡執行上傳操作，例如調用上傳函數並傳入 files
    }

    const uploadFile = () => {
        // 執行上傳操作，可以根據需要調用相應的上傳函數
    }
</script>

<template>
    <!-- 添加文件上傳區域 -->
    <div class="page-container">
        <div class="upload-container">
            <div class="upload-area" 
                @dragover.prevent="handleDragOver" 
                @drop.prevent="handleDrop">
                <p>拖曳檔案至此區域上傳</p>
                <input type="file" ref="fileInput" @change="handleFileChange" hidden>
            </div>
            <button class="upload-button" @click="uploadFile">分析</button>
            <hr class="separator"><!-- 添加分隔线 -->
        </div>
    </div>

    <div>
        <iframe src="http://140.119.65.76:8899/j36426052/web_packet_prediction/reports/iframe-test--VmlldzoxOQ" style="border:none;height:1024px;width:100%">
        </iframe>
        <!-- <iframe src="http://140.119.65.76:8899/j36426052/web_packet_prediction/reports/iframe-test--VmlldzoxOQ" 
            style="border:none;"
            width="600" 
            height="400" 
            frameborder="0"
            allowfullscreen >
        </iframe> -->
        
    </div>
</template>

<style scoped>
    .page-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    min-height: 100vh; /* 最小高度為視窗高度 */
    min-width: 100vh; /* 最小高度為視窗高度 */
    max-width: 100%; /* 設置最大宽度為100% */
    /* 
        margin: 0; 去除外邊距 
        padding: 0; 去除内邊距 
        overflow-x: hidden;  阻止水平滾動 
    */
    }
    .upload-container {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    margin: 0 auto;

    }

    .upload-area {
    /* 上傳區域的樣式 */
    padding: 120px; /* 調整上傳區域的 padding 以擴大區域 */
    border: 4px dashed #ccc;
    text-align: center;
    margin: 20px 0;
    color: white; /* 文字顏色設置為白色 */
    
    }

    .upload-button {
    background-color: #333; /* 上傳按鈕背景色設置為深灰色 */
    color: white; /* 文字顏色設置為白色 */
    padding: 10px 20px;
    cursor: pointer;
    max-width: 100px; /* 設置最大寬度，可以根據需要調整 */

    }


    .separator {
    width: 100%; /* 分隔線寬度 */
    border: none;
    height: 1px;
    background-color: #000; /* 分隔線颜色 */
    margin: 20px 0; /* 分隔線的上下邊距 */
    }
</style>