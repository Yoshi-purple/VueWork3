<template>
  <div id="todo-filter">
    <input type="radio" value="全て" name="filter"  @click="showAll('all')" checked>全て
    <input type="radio" value="作業中" name="filter" @click="showWorking('working')">作業中
    <input type="radio" value="完了" name="filter" @click="showComplete('complete')">完了
  </div>
</template>
<script>
export default {
  name: 'TodoFilter',
  data() {
    return {
      workState: ""
    }
  },
  methods: {
    showAll(state) {
      this.workState = state;
      this.$emit("showAll", this.workState);
    },
    showWorking(state) {
      this.workState = state;
      this.$emit("showWorking", this.workState);
    },
    showComplete(state) {
      this.workState = state;
      this.$emit("showComplete", this.workState);
    },
  },
}
</script>