<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <div class="radioDiv">
      <input type="radio" id="all" value="全て" name="taskStatus" checked>
      <label for="all">全て</label>
      <input type="radio" id="working" value="作業中" name="taskStatus">
      <label for="working">作業中</label>
      <input type="radio" id="complete" value="完了" name="taskStatus">
      <label for="complete">完了</label>
    </div>
    <div taskTile>
      <ul class="toDoTitle">
      <li v-for="task in taskTitle" :key="task.id">
        <span id="idSpan">{{ task.id }}</span>
        <span id="commentSpan">{{ task.taskComment }}</span>
        <span id="statusSpan">{{ task.taskState }}</span>
      </li>
    </ul>
    </div>
    <ul class="toDoUl">
      <li v-for="task in tasks" :key="task.id" id="toDoLi">
        <span id="idSpan">{{ task.id }}</span>
        <span id="commentSpan">{{ task.comment }}</span>
        <button id="btns">{{ task.status }}</button>
        <button id="btns">{{ task.delete }}</button>
      </li>
    </ul>
   
    <h2>新規タスクの追加</h2>
    <input type="text" v-model="newTask">
    <button @click="addTask" id="btns">追加</button>
  </div>
</template>
<script>
export default {
  computed: {
    taskTitle() {
      return this.$store.state.taskTitle
    },
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    addTask() {
      if(this.newTask === '') {
        return 
      }else{
        this.$store.commit('addTask',{
          comment: this.newTask,
          });
        this.newTask = '';
      }
    }
  }
}
</script>

<style>
.toDoTitle{
  list-style: none;
  padding-left: 10px;
}
.toDoUl{
  list-style: none;
  padding-left: 10px;
}
#idSpan{
  margin-right: 10px;
}
#commentSpan{
  margin-right: 10px;
}
#statusSpan{
  margin-right: 10px;
}
#btns{
  margin:0px 1px;
}
</style>
