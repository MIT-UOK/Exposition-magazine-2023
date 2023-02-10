<script setup>
import { VPTeamPageTitle } from "vitepress/theme";
</script>

<template>
  <div class="container">
    <VPTeamPageTitle>
      <template #title> Our Partners </template>
      <template #lead>
        We are grateful for the opportunity to partner with you, where together
        we will strive towards success.
      </template>
    </VPTeamPageTitle>

    <div class="row1-container">
      <div class="box box-down">
        <h2>𝐌𝐀𝐒 𝐇𝐨𝐥𝐝𝐢𝐧𝐠𝐬</h2>
        <p>Official Deluxe Partner</p>
        <img
          width="100px"
          height="100px"
          src="/images/sponsors/MAS.png"
          alt=""
        />
      </div>

      <div class="box">
        <h2>𝐄𝐯𝐨𝐧𝐬𝐲𝐬 (𝐏𝐕𝐓) 𝐋𝐓𝐃.</h2>
        <p>Co-Sponsor</p>
        <img
          width="100px"
          height="100px"
          src="/images/sponsors/Evonsys.png"
          alt=""
        />
      </div>

      <div class="box box-down">
        <h2>𝐓&𝐅𝐆 𝐆𝐫𝐨𝐮𝐩</h2>
        <p>Official Event Partner</p>
        <img
          width="100px"
          height="100px"
          src="/images/sponsors/Garment.png"
          alt=""
        />
      </div>
    </div>
    <div class="row2-container">
      <div class="box">
        <h2>𝐂𝐫𝐞𝐚𝐭𝐢𝐯𝐞 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞</h2>
        <p>Official Knowledge Partner</p>
        <img
          width="100px"
          height="100px"
          src="/images/sponsors/CreativeSoftware.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.box p {
  color: var(--vp-c-text-2);
}

.box {
  border-radius: 5px;
  background-color: var(--vp-c-bg-soft);
  padding: 30px;
  margin: 20px;
  border-top: 3px solid var(--vp-c-brand);
}

img {
  float: right;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

h2 {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-down {
    position: relative;
    top: 150px;
  }
  .box {
    width: 20%;
  }
}
</style>
