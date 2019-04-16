module.exports = {
  "preset": 'react-native',
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx"],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "\\.(ts|tsx)$": "ts-jest"
    // "^.+\\.(ts|tsx)?$": "babel-jest"
  },
  "testMatch": ['<rootDir>src/**/*.test.(ts|tsx)'],
  "globals": {
    'ts-jest': {
      "babelConfig": true,
      "tsConfig": "<rootDir>/tsconfig.jest.json"
    }
  },
  "transformIgnorePatterns": [
    "node_modules/?!(@react-native-community)"
  ],
};