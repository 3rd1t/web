module.exports = {
  name: "components",
  displayName: "components",
  preset: "../../jest.config.js",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.test.json",
    },
  },
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],
  coverageDirectory: "../../coverage/libs/components",
}
