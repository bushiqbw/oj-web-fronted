<template>
  <div class="userLoginView">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userAccount" tooltip="请输入账号" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <!--      <a-form-item field="isRead">-->
      <!--        <a-checkbox v-model="form.isRead"> I have read the manual</a-checkbox>-->
      <!--      </a-form-item>-->
      <a-form-item>
        <a-button html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService } from "../../../generated";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import message from "@arco-design/web-vue/es/message";

const router = useRouter();
const store = useStore();
/*
  表单信息
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
});

/*
  提交用户名、密码 -> 登录
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userLogin(form);
  if (res?.code === 0) {
    const user_login = await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
    console.log(user_login);
  } else {
    message.error("登录失败" + res.message);
  }
};
</script>
