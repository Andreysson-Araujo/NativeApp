import { colors } from "./src/styles/colors"
import {fontFamily} from "./src/styles/fontFamily"

/**@type {import('tailwindcss').Config} */
module.exports = {
  //trocar para o locais de arquivo nesse casoe esta na pasta src
  content: ["./src/**/*.{js,tsx,js,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}