import router from "@/router/index";
import store from "@/store";
import AccessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;

  //如果之前没登陆过，自动登录(首次登录）
  if (!loginUser || !loginUser?.userRole) {
    await store.dispatch("user/getLoginUser");
  }

  const needAccess = (to.meta?.access as string) ?? AccessEnum.NOT_LOGIN;
  //如果要跳转的页面必须要权限
  if (needAccess !== AccessEnum.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirectTo=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }

  next();
});
