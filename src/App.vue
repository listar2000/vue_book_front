<template>
  <div id="app">
    <header class="mdui-appbar mdui-appbar-fixed">
      <div class="mdui-toolbar mdui-color-deep-purple">
        <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-drawer="{target: '#main-drawer', swipe: true}">
          <i class="mdui-icon material-icons">menu</i>
        </span>
        <a href="/" class="mdui-typo-headline">BOOK@HFI</a>
        <div class="mdui-toolbar-spacer"></div>
        <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white mdui-m-r-4" mdui-tooltip="{content: '登录/注册'}">
          <i class="mdui-icon material-icons">account_circle</i>
        </span>
      </div>
    </header>

    <left-drawer logged="true"></left-drawer>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <footer class="mdui-bottom-nav mdui-color-deep-purple mdui-m-t-5">
      <div class="mdui-container">
        <div class="mdui-typo mdui-typo-caption mdui-text-center mdui-m-t-2">
          Made with 🐱‍🚀 (这里不是抄hfinotice的！)
        </div> 
        <div class="mdui-typo-caption-opacity mdui-text-center">
          Powered by HFIProgramming | 华附（国际部）编程社
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
    import LeftDrawer from './components/LeftDrawer.vue'
    export default {
      name: 'app',
      components: {LeftDrawer}
    }
</script>

