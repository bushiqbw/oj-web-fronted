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
      console.log(res);
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          useRole: AccessEnum.NOT_LOGIN,
        });
      }
    },
  },

  // mutations
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
