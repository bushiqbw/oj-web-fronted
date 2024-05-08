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
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basic-layout {
  text-align: center;
}

#basic-layout .logo {
  width: 64px;
  height: 64px;
}

#basic-layout .header {
  margin-top: 32px;
  margin-bottom: 16px;
}

#basic-layout .content {
  margin-bottom: 16px;
  padding: 16px;
}

#basic-layout .footer {
  background: #efefef;
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
