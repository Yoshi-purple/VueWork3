<template>
  <div id="todo-input">
    <input type="text" placeholder="タスクを入力" style="height: 1.5em" v-model="newTodo" data-test="newTodo">
    <button id="add-button" style="margin-left: 3px" @click="addTask" data-test="addTodo">追加</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newTodo: ''
    }
  },

  methods: {
    addTask() {
      if(this.newTodo === ""){
        console.log('タスクを入力してください')
      }else {
        this.$emit("add", this.newTodo)
        this.newTodo = ""
      }
    }
  },
}
</script>