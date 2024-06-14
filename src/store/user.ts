import { StoreOptions } from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";
import axios from "axios";
import { UserControllerService } from "../../generated";
import AccessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      //userRole: ACCESS_ENUM.NOT_LOGIN,
    },
  }),

  // actions
  actions: {
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUser();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          useRole: AccessEnum.NOT_LOGIN,
        });
      }
      console.log("登陆后的用户是" + res.data);
    },
    async userLoginOut({ commit, state }: any) {
      const res = await UserControllerService.userLogout();
      if (res.code === 0) {
        commit("setUserInfo", {
          ...state.loginUser,
          UserRole: ACCESS_ENUM.NOT_LOGIN,
        });
      }
      commit("setUserInfo", {
        ...state.loginUser,
        UserRole: ACCESS_ENUM.NOT_LOGIN,
      });
    },
  },

  // mutations
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
