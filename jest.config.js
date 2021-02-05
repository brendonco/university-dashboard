module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '\\.(css|less|scss|sass)$': '<rootDir>/.jest/identity-obj-proxy-esm.js'
    },
    collectCoverageFrom: [
        '<rootDir>/components/**/*.js',
        '!<rootDir>/pages/**/*.js',
        '!<rootDir>/components/TraceSpinner/**/*.js',
        '!<rootDir>/components/ErrorBoundary/**/*.js',
        '!<rootDir>/utils/**/*.js'
    ]
};
