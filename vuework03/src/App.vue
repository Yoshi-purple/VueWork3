<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <div class="radioDiv">
      <input type="radio" id="all" value="0" name="disp" checked />
      <label for="all">全て</label>
      <input type="radio" id="working" value="1" name="disp" />
      <label for="working">作業中</label>
      <input type="radio" id="complete" value="2" name="disp" />
      <label for="complete">完了</label>
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
    <ul class="toDoUl">
      <li v-for="task in tasks" :key="task.id" id="toDoLi">
        <span id="idSpan">{{ task.id }}</span>
        <span id="commentSpan">{{ task.comment }}</span>
        <button class="btns">作業中</button>
        <button class="btns" @click.stop="deleteTask(task.id)">削除</button>
      </li>
    </ul>

    <h2>新規タスクの追加</h2>
    <input type="text" v-model="newTask" />
    <button @click="addTask" class="btns">追加</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["addTask", "deleteTask"]),
    //タスクを追加する関数
    addTask() {
      if (this.newTask === "") return;

      this.$store.commit("createTask", {
        comment: this.newTask,
      });
      this.newTask = "";
    },
  },
};
</script>

<style>
.toDoTitle {
  list-style: none;
  padding-left: 10px;
}
.toDoUl {
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
