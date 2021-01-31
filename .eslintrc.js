module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-unreachable': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': 'warn',
        curly: ['warn', 'all'],
        'dot-notation': ['warn', { allowKeywords: true }],
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-else-return': 'warn',
        'no-eq-null': 'error',
        'no-lone-blocks': 'warn',
        'no-multi-str': 'error',
        'array-bracket-spacing': ['warn', 'never'],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
        'comma-style': ['warn', 'last'],
        camelcase: ['warn', { properties: 'always' }],
        'comma-spacing': ['warn', { before: false, after: true }],
        'computed-property-spacing': ['warn', 'never'],
        'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
        'new-parens': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 2 }],
        'no-whitespace-before-property': 'warn',
        'no-trailing-spaces': ['warn', { skipBlankLines: true }],
        'no-unneeded-ternary': 'warn',
        'object-curly-spacing': [
            'warn',
            'always',
            { objectsInObjects: true, arraysInObjects: true }
        ],
        'operator-assignment': ['warn', 'always'],
        'semi-spacing': ['warn', { before: false, after: true }],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'never'
            }
        ],
        'space-in-parens': ['warn', 'never'],
        'arrow-body-style': ['warn', 'always'],
        'arrow-parens': ['warn', 'always'],
        'arrow-spacing': ['warn', { before: true, after: true }],
        'no-const-assign': 'error',
        'prefer-const': 'warn',
        'prefer-template': 'warn',
        'template-curly-spacing': [2, 'never']
    }
};
