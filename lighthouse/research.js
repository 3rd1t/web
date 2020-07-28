const base = require("./base")


module.exports = {
  ...base,
  ci: {
    collect: {
      staticDistDir: "dist/apps/research/exported",
    },
  },
}
