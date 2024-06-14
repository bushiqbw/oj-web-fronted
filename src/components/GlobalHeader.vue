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
        <LoginAndRegister
          v-if="store.state.user.loginUser.userRole === ACCESS_ENUM.NOT_LOGIN"
        ></LoginAndRegister>
        <a-dropdown position="bottom">
          <a-avatar
            v-if="store.state.user.loginUser.userRole !== ACCESS_ENUM.NOT_LOGIN"
          >
            <img
              alt="avatar"
              :src="
                loginUser.userAvatar ??
                'https://oj-qbw-1324037679.cos.ap-shanghai.myqcloud.com/OJ_Avatar.jpg'
              "
            />
          </a-avatar>
          <template #content>
            <a-doption @click="handleClick">个人简介</a-doption>
            <a-doption @click="logout">登出</a-doption>
          </template>
        </a-dropdown>
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
import message from "@arco-design/web-vue/es/message";
import moment from "moment/moment";

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

const logout = async () => {
  await store.dispatch("user/userLoginOut", {});
  message.success("登出成功");
  location.reload();
};

const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

const data = computed(() => {
  return [
    {
      label: "用户名称",
      value: loginUser.value.userName,
    },
    {
      label: "id",
      value: loginUser.value.id,
    },
    {
      label: "性别",
      value: loginUser.value.gender == 1 ? "男" : "女",
    },
    {
      label: "用户简介",
      value: loginUser.value.userProfile,
    },
    {
      label: "注册时间",
      value: moment(loginUser.value.createTime).format("YYYY-MM-DD hh:mm"),
    },
  ];
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
