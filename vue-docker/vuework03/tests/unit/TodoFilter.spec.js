import { mount } from "@vue/test-utils"
import TodoFilter from "../../src/views/TodoFilter.vue"


test("filtertrigger", async () => {
  const wrapper = mount(TodoFilter)
  await wrapper.find ('input').setValue("all")
  await wrapper.find("input").trigger("click")
  expect(wrapper.emitted("showSwitch","all"))
})
