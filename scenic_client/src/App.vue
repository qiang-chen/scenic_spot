<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html {
    font-size: 13.333333vw;
    scroll-behavior: smooth;
}
html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>
