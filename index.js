const model = [
  { type: "title", value: "Hello World from JS" },
  { type: "text", value: "here we go with some text" },
  {
    type: "columns",
    value: ["111111111111111", "222222222222222", "333333333333333"],
  },
]

const $site = document.querySelector("#site")

model.forEach((block) => {
  console.log(block)
})
