/** @format */

import { createStore } from 'vuex';

export default createStore({
	state: {
		taskTitle: [{ id: 'ID', taskComment: ' コメント ', taskState: ' 状態 ' }],
		tasks: [],
		nextTaskId: 0,
	},
	mutations: {
		addTask(state, { comment }) {
			state.tasks.push({
				id: state.nextTaskId,
				comment,
				status: '作業中',
				delete: '削除',
			});

			state.nextTaskId++;
		},
	},
	actions: {},
	modules: {},
});
