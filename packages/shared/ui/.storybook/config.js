import "dist/packages/css/tailwind.css"
import { configure } from "@storybook/react"
configure(require.context("../src/lib", true, /\.stories\.(j|t)sx?$/), module)
