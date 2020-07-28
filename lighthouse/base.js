module.exports = {
  ci: {
    // assert: {
    //   preset: "lighthouse:recommended",
    // },
    collect: {
      numberOfRuns: 5,
      url: ["http://localhost:4200/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
