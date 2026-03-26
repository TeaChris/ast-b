module.export = {
        root: true,
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint', 'prettier'],
        extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended',
        ],
        parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
        },
        rules: {
                '@typescript-eslint/no-explicit-any': 'on',
                '@typescript-eslint/no-unused-vars': 'on',
                '@typescript-eslint/no-empty-function': 'on',
                '@typescript-eslint/no-empty-interface': 'on',
                '@typescript-eslint/no-inferrable-types': 'on',
                '@typescript-eslint/no-non-null-assertion': 'on',
                '@typescript-eslint/no-var-requires': 'on',
                '@typescript-eslint/no-explicit-any': 'on',
                '@typescript-eslint/no-explicit-any': 'on',
        },
};
