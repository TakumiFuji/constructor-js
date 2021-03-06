import { model } from "../model"

export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
  render(mode) {
    this.$el.innerHTML = ""
    model.forEach((block) => {
      this.$el.insertAdjacentHTML("beforeend", block.toHTML())
    })
  }
}
