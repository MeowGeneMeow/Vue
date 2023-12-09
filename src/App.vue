<script setup>

  import { RouterLink, RouterView } from 'vue-router'
  import Sidebar from './components/Sidebar.vue'  
  import Pie from './components/PieChart.vue'
  import Num from './components/numByte.vue'
  import Num1 from './components/numByte1.vue'
  import { ref } from 'vue'
  import LineChart from './components/LineChart.vue'
  import LineChart1 from './components/LineChart1.vue'
  

   // 使用JavaScript定期更新CPU使用率
   function updateCPU1Usage() {
        // 在這裡獲取最新的CPU使用率數據，可以使用Ajax請求從伺服器獲取數據
        // 這裡示範使用隨機生成一個虛構的CPU使用率
        var randomCPUUsage = Math.floor(Math.random() * 101);

        // 更新HTML元素中的數據
        document.getElementById("cpu1-usage").textContent = randomCPUUsage + "%";
    }
    setInterval(updateCPU1Usage, 2500);
   
   function updateCPU2Usage() {
       
        var randomCPUUsage = Math.floor(Math.random() * 101);

       
        document.getElementById("cpu2-usage").textContent = randomCPUUsage + "%";
    }
    setInterval(updateCPU2Usage, 2500);


    function updateRAM1Usage() {
       
      var randomRAMUsage = Math.floor(Math.random() * 21) + 50;

      document.getElementById("ram1-usage").textContent = randomRAMUsage + "%";
    }

    setInterval(updateRAM1Usage, 2500);

    function updateRAM2Usage() {
       
       var randomRAMUsage = Math.floor(Math.random() * 21) + 50;
 
       document.getElementById("ram2-usage").textContent = randomRAMUsage + "%";
     }
 
     setInterval(updateRAM2Usage, 2500);

     function updateINT1Usage() {
       
        var randomINTUsage = (Math.random() * (120 - 0.1) + 0.1).toFixed(1);
 
        document.getElementById("internet1-usage").textContent = randomINTUsage + "MB";
     }
 
     setInterval(updateINT1Usage, 2500);
 
     function updateINT2Usage() {
       
      var randomINTUsage = (Math.random() * (120 - 0.1) + 0.1).toFixed(1);
 
       document.getElementById("internet2-usage").textContent = randomINTUsage + "MB";
     }
 
     setInterval(updateINT2Usage, 2500);
  

  // 網頁的滑輪
  const handleMousewheel = (event) => {
    // 獲取滾動方向
    const delta = event.deltaY;
    // 根據滾動方向執行操作
    if (delta > 0) {
      // 向下滾動時執行的操作
      console.log('向下滾動');
      // 在這裡可以執行您想要的操作，比如載入更多内容
    } else if (delta < 0) {
      // 向上滾動時執行的操作
      console.log('向上滾動');
      // 在這裡可以執行您想要的操作，比如回到頂部
    }
  }
  
  // 按按鈕以後到某個地方
  const scrollToView = () => {
  const views = document.getElementById('views')
  if (views) {
    window.scrollTo({
      top: views.offsetTop - (window.innerHeight - views.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }

  const scrollToUpload = () => {
  const upload = document.getElementById('upload')
  if (upload) {
    window.scrollTo({
      top: upload.offsetTop - (window.innerHeight - upload.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }

  const scrollToAbout = () => {
  const about = document.getElementById('about')
  if (about) {
    window.scrollTo({
      top: about.offsetTop - (window.innerHeight - about.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }

  const scrollToToday = () => {
  const today = document.getElementById('today')
  if (today) {
    window.scrollTo({
      top: today.offsetTop - (window.innerHeight - today.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }

  const scrollToDeep = () => {
  const deep = document.getElementById('deep')
  if (deep) {
    window.scrollTo({
      top: deep.offsetTop - (window.innerHeight - deep.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }

  const scrollToTrack = () => {
  const track = document.getElementById('track')
  if (track) {
    window.scrollTo({
      top: track.offsetTop - (window.innerHeight - track.clientHeight) / 2,
      behavior: 'smooth'
      })
    }
  }
  
  // 將頁面滑回最上方
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};




</script>


<template>



  <Sidebar/>

  

  <div class="column">

    <div style="display: flex; text-align: center;">
      <div>
        <a href="http://140.119.65.82:8080" target="_blank">
          <img src="./airflow.jpg" alt="wanDB" style="max-width: 400px; height: 400px;">
        </a>
        <p style="font-weight: bold; font-size: 18px; margin-top: 10px;">Airflow</p>
      </div>
      <div>
        <a href="https://wandb.ai/jester36883688/web_packet_prediction?workspace=user-jester36883688" target="_blank">
          <img src="./wanDB.png" alt="wanDB" style="max-width: 1000px; height: 400px;">
        </a>
        <p style="font-weight: bold; font-size: 18px; margin-top: 10px;">WanDB</p>
      </div>
    </div>


    <div class="title">
      <p> Trackers </p>
    </div>

    
    <div class="model-info">
        <p>Tracker 1</p>
        <p>CPU使用率： <span id="cpu1-usage">Loading...</span></p>
        <p>RAM使用率： <span id="ram1-usage">Loading...</span></p>
        <p>網路流量： <span id="internet1-usage">Loading...</span></p>
    </div>
    <div class="model-info">
        <p>Tracker 2</p>
        <p>CPU使用率： <span id="cpu2-usage">Loading...</span></p>
        <p>RAM使用率： <span id="ram2-usage">Loading...</span></p>
        <p>網路流量： <span id="internet2-usage">Loading...</span></p>
    </div>

    <div class="title">
        <p> Model's Information </p>
    </div>
    <div class="line-chart">
        <LineChart />
        <div class="space"></div>
        <LineChart1 />
    </div>

    <div class="title">
        <p> Packets </p>
      </div>
    <div class="autocounter">
      <Num/>
      <div class="space"></div>
      <Num1/>
    </div>

    <div class="title">
        <p> Types of Attack </p>
      </div>
    <div class="pie-chart">
      <Pie/>
    </div>
    
  
  


  <div @mousewheel="handleMousewheel">
        <!--<header >
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
          <img alt="Vue logo" class="logo" src="@/assets/spyware.png" width="250" height="200" />
          <div class="wrapper">
            
            <HomePage msg="捍衛讚識—封包俠" />

            <nav>
                  <RouterLink @click="scrollToAbout" to="/about">About Malicious Packages</RouterLink>
                  <RouterLink @click="scrollToMembers" to="/members">Team members</RouterLink>
                  
                  <RouterLink @click="scrollToUpload" to="/upload">Analyze Files</RouterLink>
                  <RouterLink @click="scrollToToday" to="/today">Today's Tasks</RouterLink>
                  <RouterLink @click="scrollToDeep" to="/deep">Deep Analysis</RouterLink>
                  <RouterLink @click="scrollToTrack" to="/track">Training Track</RouterLink>
                  
            </nav>
            
          </div>
        </header>-->
      
          <div id="about">
            <div id="views">
              <div id="deep">
                <div id="track">
                  <RouterView/>
                </div>
              </div>
            </div>
          </div>
  
  </div>
  

  
  <div class="back-to-top" @click="scrollToTop">
    Back to Top
  </div>

</div> 

</template>


<style scoped>

.column {
  flex-direction: column; /* 設置為縱向排列 */
  margin-top: 80px; /* 調整上邊距的值以增加空間 */
  justify-content: center;
  
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

.model-info {
  background-color: rgb(52, 47, 47); /* 背景顏色 */
  padding: 15px; /* 內邊距 */
  border: 1px solid #ccc; /* 邊框 */
  text-align: left; /* 文字置中 */
  font-size: larger;
  justify-content: center;
}

.autocounter{
  margin-top: 60px; /* 調整上邊距的值以增加空間 */
  display: flex; 
  margin-left: 10px;
  justify-content: center;
}

.space {
  width: 100px; 
}

.line-chart{
  display: flex; 
  margin-top: 80px; /* 調整上邊距的值以增加空間 */
  margin-left: 80px;
  height: 250px;
  width: 500px; 
}



.pie-chart{
  display: flex;
  justify-content: center;
  margin-top: 80px; /* 調整上邊距的值以增加空間 */
  margin-left: 60px;
  width: 1000px;
  height: 400px;
  
}
  
  .upload-area input[type="file"] {
    margin-right: 1rem;
  }


  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
      white-space: nowrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
      white-space: nowrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
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

