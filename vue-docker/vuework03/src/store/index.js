import {createStore} from 'vuex';

export default createStore ({
  state: {
    tasks: [],
    sequence: 0,
  },
  getters: {
    tasksCount (state) {
      return state.tasks.length;
    },
    doneTasks (state) {
      return state.tasks.filter (task => task.done === '完了');
    },
    notDoneTasks (state) {
      return state.tasks.filter (task => task.done === '作業中');
    },
    notDoneTasksCount (state, getters) {
      return getters.notDoneTasks.length;
    },
    doneTasksCount (state, getters) {
      return getters.doneTasks.length;
    },
  },
  mutations: {
    createTask (state, {comment}) {
      const task = {
        id: state.sequence,
        comment,
        done: '作業中',
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
    changeStatus (state, id) {
      const index = state.tasks.findIndex (task => task.id === id);
      if (index >= 0) {
        if (state.tasks[index]['done'] === '完了') {
          state.tasks[index]['done'] = '作業中';
        } else {
          state.tasks[index]['done'] = '完了';
        }
        console.log (index);
      }
    },
  },
  actions: {
    createTask ({commit}, task) {
      commit ('createTask', task);
    },
    deleteTask ({commit}, id) {
      commit ('deleteTask', id);
    },
    changeStatus ({commit}, id) {
      commit ('changeStatus', id);
    },
  },
  modules: {},
});
