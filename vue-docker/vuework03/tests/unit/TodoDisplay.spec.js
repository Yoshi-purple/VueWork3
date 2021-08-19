import { mount } from "@vue/test-utils"
import TodoDisplay from "../../src/views/TodoDisplay.vue"

test("import todo", async () => {
  const wrapper = mount(TodoDisplay)
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(0)
  await wrapper.setProps({
    todoList: [{
      id: 1,
      task: "タスク1",
      status: "作業中"
    }]
  })
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
  expect(wrapper.emitted("change", 1))
  expect(wrapper.emitted("delete", 1))
})


