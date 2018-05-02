<template lang="html">
  <div id="app">
    <router-view></router-view>
    <input v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Fuck U Leather Man'
    }
  }
}
</script>
