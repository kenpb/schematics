const jestConfig = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  // https://github.com/jsdom/jsdom/issues/2304#issuecomment-440642168
  testURL: 'http://localhost',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/out-tsc/',
    '<rootDir>/src/.*(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    'src/(setup-jest|jest-global-mocks).ts',
  ],
};
module.exports = jestConfig;
