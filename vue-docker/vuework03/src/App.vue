<template>
<div id="app">
  <h1>ToDoリスト</h1>
  <TodoFilter @showSwitch="showSwitch"></TodoFilter>
  <TodoDisplay :todoList="todoList" @change="changeStatus" @delete="deleteTask" @changeId="changeId" v-show="state === 'all'"></TodoDisplay>
  <TodoDisplay :todoList="notDoneTasks" @change="changeStatus" @delete="deleteTask" @changeId="changeId"  v-show="state === 'working'"></TodoDisplay>
  <TodoDisplay :todoList="doneTasks" @change="changeStatus" @delete="deleteTask" @changeId="changeId" v-show="state === 'complete'"></TodoDisplay>
  <h2>新規タスクの追加</h2>
  <TodoInput :todoList="todoList" @add="addTodo"></TodoInput>
</div>
</template>
<script>
import TodoFilter from "./views/TodoFilter.vue"
import TodoInput from "./views/TodoInput.vue"
import TodoDisplay from "./views/TodoDisplay.vue"
export default {
  data(){
    return {
      todoList: [],
      sequence: 0,
      state: "all"
    }
  },
  components: {
    TodoFilter,
    TodoInput,
    TodoDisplay
  },
  computed: {
    doneTasks() {
      return this.todoList.filter(todo => todo.status === "完了")
    },
    notDoneTasks() {
      return this.todoList.filter(todo => todo.status === "作業中")
    },
  },
  methods: {
    addTodo(task) {
      const newTask = {
        id: this.sequence,
        task: task,
        status: "作業中"
      }
      this.todoList.push(newTask)
      this.sequence++;
    },
    changeStatus(task) {
      if(task.status === "作業中") {
        task.status = "完了"
      } else {
        task.status = "作業中"
      }
    },
    deleteTask(task) {
      let index = this.todoList.indexOf(task)
      if(index >= 0){
        this.todoList.splice(index, 1);
      }
        this.sequence--;
      },
    changeId() {
      for(let i = 0;i <= this.todoList.length; i++){
        this.todoList[i]["id"] = i;
        console.log(this.todoList)
    }
    },
    showSwitch(selectedState) {
      this.state = selectedState
    }
  },
}
</script>

<style>
</style>
