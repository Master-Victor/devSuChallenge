const {defaults} = require('jest-config');
module.exports = {
    testEnvironment: 'jsdom',
    "moduleNameMapper": { "\\.(css|less)$": "<rootDir>/assets/css/__mocks__/styleMock.js" }
};