module.exports = {
  name: "shared-components",
  preset: "../../jest.config.js",
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", { cwd: __dirname, configFile: "./babel-jest.config.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html", "json"],
  coverageDirectory: "../../coverage/packages/components",
}
