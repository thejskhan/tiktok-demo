/** @type {import('tailwindcss').Config} */
import { slate, indigo } from "@radix-ui/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,

      white: "#fff",
      black: "#000",

      root: {
        DEFAULT: indigo.indigo1,
        "n": slate.slate1
      },
      light: {
        DEFAULT: indigo.indigo2,
        "n": slate.slate2
      },
      soft: {
        DEFAULT: indigo.indigo3,
        "n": slate.slate3,
      },
      soft1: {
        DEFAULT: indigo.indigo4,
        "n": slate.slate4,
      },
      soft2: {
        DEFAULT: indigo.indigo5,
        "n": slate.slate5,
      },
      divider: {
        DEFAULT: indigo.indigo6,
        "n": slate.slate6,
      },
      line: {
        DEFAULT: indigo.indigo7,
        "n": slate.slate7,
      },
      line1: {
        DEFAULT: indigo.indigo8,
        "n": slate.slate8,
      },
      hard: {
        DEFAULT: indigo.indigo9,
        "n": slate.slate9,
      },
      hard1: {
        DEFAULT: indigo.indigo10,
        "n": slate.slate10,
      },
      default: {
        DEFAULT: indigo.indigo11,
        "n": slate.slate11,
      },
      dark: {
        DEFAULT: indigo.indigo12,
        "n": slate.slate12,
      },
    }),
    extend: {},
  },
  plugins: [],
}