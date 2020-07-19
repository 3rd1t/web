module.exports = {
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)", "!**/integration/**"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  // transformIgnorePatterns: [`/node_modules/`],
  resolver: "@nrwl/jest/plugins/resolver",
  moduleFileExtensions: ["ts", "js", "html"],
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: ["apps/**/*.{ts,tsx}", "libs/**/*.{ts,tsx}", "!**/*.d.ts", "!**/index.ts"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
}
