<template>
  <div id="globalheader">
    <a-row class="grid-demo" align="center" justify="center" :wrap="false">
      <a-col flex="auto">
        <div>
          <a-menu
            mode="horizontal"
            :selected-keys="selectedKeys"
            @menu-item-click="doMenuClick"
          >
            <a-menu-item
              key="0"
              :style="{ padding: 0, marginRight: '38px' }"
              disabled
            >
              <div class="title-bar">
                <img class="logo" src="@/assets/oj-logo.jpg" />
                <div class="title" :style="{ fontSize: '26px' }">ACM OJ</div>
              </div>
            </a-menu-item>
            <a-menu-item v-for="item in visibleRoutes" :key="item.path"
              >{{ item.name }}
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <a-col flex="100px">
        <div>{{ store.state.user.loginUser?.userName }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

const router = useRouter();
const route = useRoute();
const store = useStore();
const loginUser = store.state.user.loginUser;
//隐藏路由，过滤器，返回值代表是否保留
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    //todo 根据权限过滤菜单
    if (!checkAccess(loginUser, item?.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

//根据是否登录动态更新visibleRoutes数组
//默认主页，当前选中的菜单项
const selectedKeys = ref([route.path]);

const doMenuClick = (key: string) => {
  router.push({ path: key });
};
//路由发生改变后，改变绑定的selectedKeys属性
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

//定时函数，模拟登陆后的状态栏
// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "qbw_login",
//     userRole: ACCESS_ENUM.ADMIN,
//   });
//   console.log(store.state.user.loginUser?.userRole);
// }, 3000);
// console.log(store.state.user.loginUser);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
