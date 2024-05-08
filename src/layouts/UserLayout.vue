<template>
  <div id="basic-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="@/assets/oj-logo.jpg" class="logo" />
          <div>ACM OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer"
        ><a href="https://github.com/bushiqbw/" target="_blank">
          阿强哥的GitHub
        </a></a-layout-footer
      >
    </a-layout>
  </div>
</template>

<style scoped>
#basic-layout {
  text-align: center;
  background: url(https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png)
    0% 0% / 100% 100%;
}

#basic-layout .logo {
  width: 64px;
  height: 64px;
}

#basic-layout .header {
  margin-top: 32px;
}

#basic-layout .content {
  margin-bottom: 16px;
  padding: 16px;
}

#basic-layout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
