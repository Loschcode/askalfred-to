export const state = () => ({
  title: ['', '']
});

export const mutations = {
  setTitle(state, array) {
    state.title = array;
  }
};
