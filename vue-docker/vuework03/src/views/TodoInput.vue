<template>
  <div id="todo-input">
    <input type="text" placeholder="タスクを入力"  style="height: 1.5em" v-model="newTodo">
    <button id="add-button" style="margin-left: 3px" @click="addTask">追加</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newTodo: ''
    }
  },

  props: ["todoList"],
  methods: {
    addTask() {
      this.$emit("add", this.newTodo)
      this.newTodo = ""
    }
  },
}
</script>