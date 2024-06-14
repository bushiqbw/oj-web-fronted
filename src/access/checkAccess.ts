import AccessEnum from "@/access/accessEnum";

//判断当前页面和用户权限
const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  //获取当前用户登录状态，如果用户没有登录态，那么就是未登录
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  //判断是否需要登陆权限
  if (needAccess === AccessEnum.USER) {
    if (loginUserAccess === AccessEnum.NOT_LOGIN) {
      return false;
    }
  }
  //判断需要管理员权限
  if (needAccess === AccessEnum.ADMIN) {
    if (loginUserAccess !== AccessEnum.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
