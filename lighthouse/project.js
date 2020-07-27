module.exports = {
    ci: {
      // assert: {
      //   preset: "lighthouse:recommended",
      // },
      collect: {
        numberOfRuns: 5,
        url: [
          "http://localhost:4200/"
        ],
        staticDistDir:"dist/apps/project/exported",
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  }
  