import { mount } from "@vue/test-utils"
import TodoInput from "../../src/views/TodoInput.vue"

test("set to input", async () => {
  const wrapper = mount(TodoInput)
  const input = wrapper.find('[data-test="newTodo"]')
  await input.setValue("タスク")
  expect(input.element.value).toBe("タスク")
});

test("trigger", async () => {
  const wrapper = mount(TodoInput);
  await wrapper.get('[data-test="addTodo"]').trigger("click")
  expect(wrapper.emitted("add"))
});