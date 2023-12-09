<script setup>
import PackageItem from './PackageItem.vue'
import DDoSIcon from './icons/IconDDoS.vue'
import DetectionIcon from './icons/IconDetection.vue'
import PhishingIcon from './icons/IconPhishing.vue'
import MaliciousIcon from './icons/IconMalicious.vue'
import TamperIcon from './icons/IconTamper.vue'
</script>

<template>
  <div class="center-container">
    <div class="about-content">
    <h1 class="topic">網路惡意攻擊可能造成的五大威脅</h1>
    <br>
    <PackageItem>
      <template #icon>
        <DDoSIcon />
      </template>
      <template #heading>拒絕服務攻擊（DDoS）</template>

      
      <!--<a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>-->
      惡意封包可以用於發起分佈式拒絕服務攻擊，其中大量的惡意封包被發送到目標服務器，導致服務器不堪重負而無法提供正常服務。這可能導致服務中斷、可用性下降，甚至造成業務損失。
    </PackageItem>

    <PackageItem>
      <template #icon>
        <DetectionIcon />
      </template>
      <template #heading>網絡探查</template>

      惡意封包可以用於在網絡上執行探查攻擊，竊取傳輸的數據包，包括敏感信息如用戶名、密碼、信用卡信息等。攻擊者可以利用這些信息進行進一步的攻擊或盜竊。
    </PackageItem>

    <PackageItem>
      <template #icon>
        <PhishingIcon />
      </template>
      <template #heading>網絡釣魚</template>

      惡意封包可以包含網絡釣魚連結或惡意內容，以欺騙用戶點擊連結並輸入敏感信息，如個人身份信息。這可能導致身份盜竊、金融損失等問題。
    </PackageItem>

    <PackageItem>
      <template #icon>
        <MaliciousIcon />
      </template>
      <template #heading>惡意軟體傳播</template>

      惡意封包可以攜帶惡意軟體或病毒，通過網絡傳播到受感染的電腦。一旦用戶執行了惡意封包攜帶的文件，惡意軟體可能在受害者的電腦上進行惡意操作，如竊取個資、控制系統等。
    </PackageItem>

    <PackageItem>
      <template #icon>
        <TamperIcon />
      </template>
      <template #heading>數據篡改</template>
      惡意封包可以被用來進行數據篡改，改變傳輸數據的內容。這可能會導致信息不一致，損壞或錯誤的數據被傳遞，影響數據的完整性和可靠性。
    </PackageItem>
    </div>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.about-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* 設置最大寬度，可調整 */
  padding: 1rem;
}

.topic{
  color: whitesmoke;
}
</style>
