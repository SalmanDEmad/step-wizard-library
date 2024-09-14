module.exports = {
    testEnvironment: 'jsdom', // Ensures you can test components in a browser-like environment
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extends jest with testing-library matchers
  };  