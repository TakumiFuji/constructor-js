import image from "./assets/image.jpg"
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
} from "./classes/blocks"

const text = "JavaScript is the most beautifull programming language"

export const model = [
  new TitleBlock("Contstructor sites on Vanilla JS", {
    tag: "h2",
    // styles: `background: ; color: #fff; text-align: center; padding: 1.5rem;`,#
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  new ColumnsBlock(
    [
      "Javascript application on vanilla JavaScrapt code create by TakumiFuji from Kaliningrad",
      "JavaScript hero in this world",
      "JavaScript - it's simple and interesting!",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new ImageBlock(image, {
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
  }),
]
