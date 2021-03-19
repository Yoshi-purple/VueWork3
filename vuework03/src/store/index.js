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
    done: state => {
      return state.tasks.done;
    },
    sequence: state => {
      return state.sequence;
    },
  },
  mutations: {
    createTask (state, {comment}) {
      const task = {
        id: state.sequence,
        comment,
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
        state.tasks[i].id = i;
      }
    },
  },
  actions: {
    addTask ({commit}, task) {
      commit ('createTask', task);
    },
    deleteTask ({commit}, id) {
      commit ('deleteTask', id);
    },
  },
  modules: {},
});
