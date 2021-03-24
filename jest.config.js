module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/config/importJestDOM.ts',
    '<rootDir>/__tests__/config/setupWindowMatchMedia.ts'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts'
  },
  transformIgnorePatterns: ['./node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/config'
  ]
}
