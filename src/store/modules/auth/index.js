// import mutations from "./mutations";
// import getters from "./getters";
// import actions from "./actions";
export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
};
