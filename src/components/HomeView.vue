<script setup>

</script>

<template>
  <div class="anime-list">
    <div class="anime-list-align">
      <router-link class="anime-list-card-text" to="/anime/agent-of-time">
        <div class="anime-list-card">
          <img src="../assets/agent-of-time-anime.png" alt="" class="anime-list-card-img">
          <p class="anime-list-card-text">Агент времени</p>
        </div>
      </router-link>
    </div>
  </div>
  <h1>Anime Home</h1>
</template>

<style scoped>

h1 {
  font-size: 25px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  margin-top: 50px;
  letter-spacing: 1.5px;
}

.anime-list {
  width: 100%;
  height: 350px;
  background: #e0a4a4;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.anime-list-align {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
}
.anime-list-card {
  background: white;
  width: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.anime-list-card-img {
  height: 200px;
}
.anime-list-card-text {
  font-family: Inconsolata, sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: black;
}

</style>