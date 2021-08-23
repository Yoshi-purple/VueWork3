import { mount } from "@vue/test-utils"
import TodoInput from "../../src/views/TodoInput.vue"

const wrapper = mount(TodoInput)
const input = wrapper.find('[data-test="newTodo"]')
test("set to input", async () => {
  await input.setValue("タスク")
});
it('追加するタスクがinputに登録されること', () => {
  expect(input.element.value).toBe("タスク")
})

test("trigger", async () => {
  // const wrapper = mount(TodoInput);
  await wrapper.get('[data-test="addTodo"]').trigger("click")
});
it('クリックイベントが設定されていること', () => {
  expect(wrapper.emitted("add"))
})