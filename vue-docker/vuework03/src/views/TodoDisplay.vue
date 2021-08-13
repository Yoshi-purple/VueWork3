<template>
<div id="todo-display">
  <span style="margin-right: 1em">ID</span>
  <span style="margin-right: 1em">コメント</span>
  <span>状態</span>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      <p class="todo-tag" style="margin-right: 1em">{{ todo.id }}</p>
      <p class="todo-tag" style="margin-right: 1em">{{ todo.task }}</p>
      <button class="btn" @click="changeWorkState(todo.id)">{{ todo.status }}</button>
      <button class="btn" @click="deleteTodo(todo.id)">削除</button>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  props: {
    todoList: Array,
    notDoneTasks: Array,
    doneTasks: Array,
    state: String
  },
  computed: {
  },
  methods: {
    changeWorkState(index) {
      this.$emit('change', this.todoList[index])
      console.log(this.todoList[index])
    },
    deleteTodo(index) {
      this.$emit("delete", this.todoList[index]);
      this.$emit("changeId")
    },
  },
}
</script>
<style>
ul {
  padding-left: 0;
  margin-top: auto;
}
.todo-tag{
  display: inline-flex;
  margin-bottom: 1px;
}
li {
  list-style-type: none;
}

.btn {
    display:inline-flex;
    vertical-align:initial;
    justify-content: center;
    align-items: center;
    --padding-x: 1.2em;
    border-color: transparent; /* button要素のborderを隠す */
    cursor: pointer;
  }
</style>