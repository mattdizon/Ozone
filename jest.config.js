module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
  },

  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  testEnvironment: 'jsdom',
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
],
transformIgnorePatterns: [
    "/node_modules/(?!native-base)/"
]
};