import base from "./base"

module.exports = {
  ...base,
  ci: {
    collect: {
      staticDistDir: "dist/apps/project/exported",
    },
  },
}
