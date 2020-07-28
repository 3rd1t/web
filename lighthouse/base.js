module.exports = {
  ci: {
    // assert: {
    //   preset: "lighthouse:recommended",
    // },
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
