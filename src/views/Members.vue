<template>
  <div class="about">
    <div>
      <h1 class="title">Team Members</h1> 
    
      <div class="members-container">
        <div class="member1">
            <img src="@/assets/member1.png" alt="Member 1" class="member-img">
            <p class="introduction">
              康瑋翔
              <br>
              組長
            </p>
        </div>

        <div class="member2">
          <img src="@/assets/member2.png" alt="Member 2" class="member-img">
          <p class="introduction">
            劉子郡
          </p>
        </div>

        <div class="member3">
          <img src="@/assets/member3.png" alt="Member 3" class="member-img">
          <p class="introduction">
            徐慧妤
          </p>
        </div>

        <div class="member4">
          <img src="@/assets/member4.png" alt="Member 4" class="member-img">
          <p class="introduction">
            郭家榛
          </p>
        </div>

        <div class="member5">
          <img src="@/assets/member5.png" alt="Member 5" class="member-img">
          <p class="introduction">
            曾子峰
          </p>
        </div>
      </div>

      <div class="professor">
      <h1 class="title">Professor</h1> 
        <div >
          <img src="@/assets/professor.png" alt="Professor" class="professor-img">
          <p class="introduction">
            蕭舜文
          </p>
        </div>
      </div>
    </div> 
  </div>

</template>

<style>
@media (min-width: 1024px) {

  .about {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 40px; /* 調整標題與元素之間的距離 */ 
    display: flex;
    justify-content: center; /* 水平居中 */
    color: whitesmoke;
  }

  .members-container {
    display: flex;
    flex-direction: row; /* 横向排列 */
    justify-content: space-around; /* 在横向方向上均匀分布 */
    width: 100%;
    max-width: 800px;
    gap: 30px; /* 設定成員照片之間的間隔 */
  }

  .member {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .member-img {
    max-width: 100%;
    height: auto;
  }

  .professor {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px; /* 距離上方的間距 */
  }

  .professor-img {
    max-width: 100%;
    height: auto;
  }

  .introduction{
    color:beige
  }
  
  

}
</style>
