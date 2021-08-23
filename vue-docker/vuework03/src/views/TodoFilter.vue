<template>
  <div id="todo-filter">
    <input type="radio" value="全て" name="filter"  @click="showSwitch('all')" checked>全て
    <input type="radio" value="作業中" name="filter" @click="showSwitch('working')">作業中
    <input type="radio" value="完了" name="filter" @click="showSwitch('complete')">完了
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
    showSwitch(state) {
      this.workState = state;
      this.$emit("showSwitch", this.workState);

    }
  },
}
</script>