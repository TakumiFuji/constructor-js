import image from "./assets/image.jpg"

const text = "JavaScript is the most beautifull programming language"

export const model = [
  {
    type: "title",
    value: "Contstructor sites on Vanilla JS",
    options: {
      tag: "h2",
      // styles: `background: ; color: #fff; text-align: center; padding: 1.5rem;`,#
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        "text-align": "center",
        padding: "1.5rem",
      },
    },
  },
  {
    type: "text",
    value: text,
    options: {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        padding: "1rem",
        "font-weight": "bold",
      },
    },
  },
  {
    type: "columns",
    value: [
      "Javascript application on vanilla JavaScrapt code create by TakumiFuji from Kaliningrad",
      "JavaScript hero in this world",
      "JavaScript - it's simple and interesting!",
    ],
    options: {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    },
  },
  {
    type: "image",
    value: image,
    options: {
      styles: {
        padding: "2rem",
        display: "flex",
        "justify-content": "center",
      },
      imageStyles: {
        width: "500px",
        height: "auto",
      },
      alt: "This is image",
    },
  },
]
