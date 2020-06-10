export default {
  namespace: "user",
  state: {
    username: "bamboo",
  },

  subscriptions: {
    userApp({ dispatch, history }) {
      // eslint-disable-line
      console.log("user"); //sy-log
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: "save" });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
