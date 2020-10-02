import { configure } from "@storybook/react"
import "dist/packages/css/tailwind.css"
configure(require.context("../src/", true, /\.stories\.(j|t)sx?$/), module)
