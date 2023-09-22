<script setup>

  import { RouterLink, RouterView } from 'vue-router'
  import HomePage from './components/HomePage.vue'
  import Sidebar from './components/Sidebar.vue'

  import { ref } from 'vue'


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
  const scrollToMembers = () => {
  const members = document.getElementById('members')
  if (members) {
    window.scrollTo({
      top: members.offsetTop - (window.innerHeight - members.clientHeight) / 2,
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

  <div @mousewheel="handleMousewheel">
      <div class="center-container">
        <header >
          <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
          <img alt="Vue logo" class="logo" src="@/assets/spyware.png" width="250" height="200" />
          <div class="wrapper">
            
            <HomePage msg="捍衛讚識—封包俠" />

            <nav>
                  <RouterLink @click="scrollToAbout" to="/about">About Malicious Packages</RouterLink>
                  <RouterLink @click="scrollToMembers" to="/members">Team members</RouterLink>
                  <!--
                  <RouterLink @click="scrollToUpload" to="/upload">Analyze Files</RouterLink>
                  <RouterLink @click="scrollToToday" to="/today">Today's Tasks</RouterLink>
                  <RouterLink @click="scrollToDeep" to="/deep">Deep Analysis</RouterLink>
                  <RouterLink @click="scrollToTrack" to="/track">Training Track</RouterLink>
                  -->
            </nav>
            
          </div>
        </header>
      </div> <!-- 置中 -->
      <div id="members">
        <div id="upload">
          <div id="about">
            <div id="today">
              <div id="deep">
                <div id="track">
                  <RouterView/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  
  <div class="back-to-top" @click="scrollToTop">
    Back to Top
  </div>

  

</template>


<style scoped>




  .center-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    
    min-height: 100vh; /* 最小高度為視窗高度 */
    margin: 0px; /* 去除外邊距 */
    padding: 0px; /* 去除内邊距 */
    flex-direction: column; /* 設置為縱向排列 */
    max-width: 100%; /* 設置最大寬度為100% */
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

