import {createStore} from 'vuex';

export default createStore ({
  state: {
    tasks: [],
    sequence: 0,
  },
  getters: {
    tasks: state => {
      return state.tasks;
    },
    sequence: state => {
      return state.sequence;
    },
  },
  mutations: {
    createTask (state, {comment}) {
      const task = {
        id: state.sequence,
        comment: comment,
        done: false,
      };
      state.tasks.push (task);
      state.sequence++;
    },
    deleteTask (state, id) {
      const index = state.tasks.findIndex (task => task.id === id);
      if (index >= 0) {
        state.tasks.splice (index, 1);
        state.sequence--;
      }
      for (let i = 0; i <= state.tasks.length; i++) {
        // state.tasks[i].id = i;
        state.tasks[i].id = i;
      }
    },
    changeDone (state, id) {
      const index = state.tasks.findIndex (task => task.id === id);
      if (index >= 0) {
        state.tasks[index].done = !state.tasks[index].done;
      }
    },
  },
  actions: {
    addTask ({commit}, task) {
      commit ('createTask', task);
    },
    changeDone ({commit}, id) {
      commit ('changeDone', id);
    },
    deleteTask ({commit}, id) {
      commit ('deleteTask', id);
    },
  },
  modules: {},
});
