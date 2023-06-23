<script setup>

</script>

<template>
  <div class="navigation">
    <nav>
      <router-link to="/"><img class="nav-logo" src="./assets/animehome-logo.png" alt="AnimeHome"></router-link>
      <div class="nav-menu">
        <router-link class="router-link" to="/anime">ANIME</router-link>
        <router-link class="router-link" to="/news">NEWS</router-link>
      </div>
    </nav>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
.navigation {
  height: 80px;
  box-shadow: 0 1px 10px black;
}
nav {
  width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.nav-logo {
  height: 80px;
  width: 160px;
}
.nav-menu {
  display: flex;
  align-items: center;
  gap: 50px;
}
.router-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 5px;
  font-weight: 500;
}
.router-link-active {
  color: #b40000;
}
.content {
  width: 1500px;
  border-radius: 20px;
  overflow: hidden;
  min-height: 500px;
  box-shadow: 0 0 10px -2px black;
  margin: 100px auto;
}
</style>
