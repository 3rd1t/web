module.exports = {
  ci: {
    assert: {
      // preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:bestPractices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
