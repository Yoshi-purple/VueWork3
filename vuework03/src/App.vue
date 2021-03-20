<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <div class="radioDiv">
      <input type="radio" id="all" value="全て" name="disp" v-model="disp" checked />
      <label for="all">全て({{ tasksCount }})</label>
      <input type="radio" id="notDone" value="作業中" name="disp" v-model="disp" />
      <label for="working">作業中({{ NotDoneTasksCount }})</label>
      <input type="radio" id="done" value="完了" name="disp" v-model="disp" />
      <label for="complete">完了({{ doneTasksCount }})</label>
    </div>
    <div class="taskTile">
      <ul class="toDoTitle">
        <li>
          <span id="idSpan">ID</span>
          <span id="commentSpan">コメント</span>
          <span id="statusSpan">状態</span>
        </li>
      </ul>
    </div>
    <ul class="tasksUl" v-if="disp === '全て'">
      <li v-for="task in tasks" :key="task.id">
        <span id="idSpan">{{ task.id }}</span>
        <span id="commentSpan">{{ task.comment }}</span>
        <button class="btns" @click="changeStatus(task.id)">{{ task.done }}</button>
        <button class="btns" @click.stop="deleteTask(task.id)">削除</button>
      </li>
    </ul>
    <ul class="tasksUl" v-if="disp === '作業中'">
      <li v-for="task in notDoneTasks" :key="task.id">
        <span id="idSpan">{{ task.id }}</span>
        <span id="commentSpan">{{ task.comment }}</span>
        <button class="btns" @click="changeStatus(task.id)">{{ task.done }}</button>
        <button class="btns" @click.stop="deleteTask(task.id)">削除</button>
      </li>
    </ul>
    <ul class="tasksUl" v-if="disp === '完了'">
      <li v-for="task in doneTasks" :key="task.id">
        <span id="idSpan">{{ task.id }}</span>
        <span id="commentSpan">{{ task.comment }}</span>
        <button class="btns" @click="changeStatus(task.id)">{{ task.done }}</button>
        <button class="btns" @click.stop="deleteTask(task.id)">削除</button>
      </li>
    </ul>

    <h2>新規タスクの追加</h2>
    <input type="text" v-model="newTask" />
    <button @click="addTask" class="btns">追加</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      disp: '全て',
    };
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters([
      'tasksCount',
      'notDoneTasks',
      'doneTasks',
      'NotDoneTasksCount',
      'doneTasksCount',
    ]),
  },
  methods: {
    ...mapActions(['deleteTask', 'changeStatus']),
    //タスクを追加する関数
    addTask() {
      if (this.newTask === '') {
        return;
      } else {
        this.$store.commit('createTask', {
          comment: this.newTask,
        });
        this.newTask = '';
      }
    },
    changeStatus(e) {
      this.$store.commit('changeStatus', e);
    },
  },
};
</script>

<style>
.toDoTitle {
  list-style: none;
  padding-left: 10px;
}
.tasksUl {
  list-style: none;
  padding-left: 10px;
}
#idSpan {
  margin-right: 10px;
}
#commentSpan {
  margin-right: 10px;
}
#statusSpan {
  margin-right: 10px;
}
.btns {
  margin: 0px 1px;
}
</style>
