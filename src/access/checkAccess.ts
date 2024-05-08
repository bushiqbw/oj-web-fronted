import AccessEnum from "@/access/accessEnum";

//判断当前页面和用户权限
const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  //需要登陆权限
  if (needAccess === AccessEnum.USER) {
    if (loginUserAccess === AccessEnum.NOT_LOGIN) {
      return false;
    }
  }
  //需要管理员权限
  if (needAccess === AccessEnum.ADMIN) {
    if (loginUserAccess !== AccessEnum.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
