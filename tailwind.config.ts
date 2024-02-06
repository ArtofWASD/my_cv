import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url('/paralaxImages/sky.png')",
        mountain3: "url('/paralaxImages/mountainsThird.png')",
        mountain2: "url('/paralaxImages/mountainsSecond.png')",
        mountain1: "url('/paralaxImages/mountainsFirst.png')",
        tree: "url('/paralaxImages/woods.png')",
      },
    },
  },
  plugins: [],
}
export default config
