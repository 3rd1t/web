module.exports = {
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html"],
  resolver: "@nrwl/jest/plugins/resolver",
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
}
