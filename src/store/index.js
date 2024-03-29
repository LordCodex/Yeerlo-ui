import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
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
});

export default store;
