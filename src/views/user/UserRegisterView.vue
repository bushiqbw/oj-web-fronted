<template>
  <div class="userRegisterView">
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <h2 style="margin-bottom: 32px">用户注册</h2>
      <a-form-item field="userAccount" tooltip="请输入账号" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再次确认密码"
        />
      </a-form-item>
      <!--      <a-form-item field="isRead">-->
      <!--        <a-checkbox v-model="form.isRead"> I have read the manual</a-checkbox>-->
      <!--      </a-form-item>-->
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 120px; margin: 0 auto"
          >注册
        </a-button>
      </a-form-item>
    </a-form>
    <a-layout-footer class="footer"
      ><a href="http://localhost:8080/user/Login" target="_blank">
        注册完成了？去登录吧！
      </a></a-layout-footer
    >
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
  checkPassword: "",
});

/*
  提交用户名、密码 -> 登录
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegister(form);
  if (res?.code === 0) {
    message.success("注册成功！");
  } else {
    message.error("登录失败" + res.message);
  }
};
</script>
