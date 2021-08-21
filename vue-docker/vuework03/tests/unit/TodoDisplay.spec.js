import { mount } from "@vue/test-utils"
import TodoDisplay from "../../src/views/TodoDisplay.vue"

const wrapper = mount(TodoDisplay)
it('todolistが空になっていること', () => {
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(0)
});
test("import todo", async () => {
  await wrapper.setProps({
    todoList: [{
      id: 1,
      task: "タスク1",
      status: "作業中"
    }]
  })
})
it('todolistにタスクが追加されていること', () => {
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
})
it('タスクの状態が変更できること', () => {
  expect(wrapper.emitted("change", 1))
})
it('タスクを削除できること', () => {
  expect(wrapper.emitted("delete", 1))
})


