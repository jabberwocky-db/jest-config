export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testTimeout: 50000,
    testMatch: ['<rootDir>/tests/**/*.ts'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            useESM: true
        }
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*'],
    coverageReporters: ['html'],
    coverageProvider: 'v8',
    coverageDirectory: 'tmp/coverage',
    coveragePathIgnorePatterns: ['node_modules', 'index.ts', 'types.ts'],
    moduleDirectories: ['node_modules', '.']
};
