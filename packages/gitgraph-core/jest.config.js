/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testTimeout: 30000,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  // testEnvironment: './jest-puppeteer.config.js',
  // setupFilesAfterEnv: ['jest-puppeteer'],
};
