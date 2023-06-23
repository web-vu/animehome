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
</template>

<style scoped>

.anime-list {
  width: 100%;
  display: flex;
  align-items: center;
}
.anime-list-align {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
.anime-list-card {
  background: #ef8d8d;
  width: 150px;
  padding: 20px;
  margin-top: 20px;
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
  font-family: 'Segoe UI', sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: white;
}
</style>