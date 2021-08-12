<template>
  <div id="todo-filter">
    <input type="radio" value="全て" name="filter"  @click="$emit('showAll')" checked>全て
    <input type="radio" value="作業中" name="filter" @click="$emit('showWorking')">作業中
    <input type="radio" value="完了" name="filter" @click="$emit('showComplete')">完了
  </div>
</template>
<script>
export default {
  name: 'TodoFilter',

}
</script>