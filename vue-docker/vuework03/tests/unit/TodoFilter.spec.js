import { mount } from "@vue/test-utils"
import TodoFilter from "../../src/views/TodoFilter.vue"


const wrapper = mount(TodoFilter)
test("filtertrigger", async () => {
  await wrapper.find ('input').setValue("all")
  await wrapper.find("input").trigger("click")
})
it('全てのタスクが表示されること', () => {
  expect(wrapper.emitted("showSwitch","all"))
})
