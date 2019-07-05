<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Adicionar Dado</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">Dados</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'AddTanque' }" class="nav-link">Adicionar Tanque</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ListTanque' }" class="nav-link">Tanque</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Dashboard' }" class="nav-link">Painel</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  
</style>

<style>
  .gap {
    margin-top: 50px;
  }
</style>

<script>

export default {
  name: 'app'
}
</script>