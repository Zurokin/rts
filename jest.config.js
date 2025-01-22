module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!http.js', // Исключить mock-файлы
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
