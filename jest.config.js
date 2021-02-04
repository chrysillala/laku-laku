// Because Gatsby handles its own Babel configuration, you will need to manually tell Jest to use babel-jest
// The easiest way to do this is by adding a jest.config.js

module.exports = {
  // tells Jest that all .js or .jsx files need to be transformed using jest-preprocess.js
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  // tells Jest how to handle imports. You are mainly concerned here with mocking static file imports, which Jest can’t handle.
  // here you are mocking assets rather than code
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`, // mock stylesheets with identity-obj-proxy
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`, // mock other assets manually with file-mock.js
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  // The reason that you need transformIgnorePatterns is because Gatsby includes un-transpiled ES6 code.
  // This is because gatsby-browser-entry.js isn’t being transpiled before running in Jest.
  // You can fix this by changing the default transformIgnorePatterns to exclude the gatsby module.
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  // The setupFiles array lets you list files that will be included before all tests are run, so it’s perfect for this.
  setupFiles: [`<rootDir>/loadershim.js`],
}