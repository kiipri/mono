module.exports = {
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'import', '@typescript-eslint'],
	extends: [
		'next',
		'turbo',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'turbo/no-undeclared-env-vars': 'warn',
		indent: ['warn', 'tab', { SwitchCase: 1, VariableDeclarator: 2, ignoredNodes: ['ConditionalExpression'] }],
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }],
		'react/jsx-key': 'warn',
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		semi: ['error', 'always'],
		'no-empty-pattern': ['warn'],
		'import/no-unresolved': 'warn',
		'import/no-anonymous-default-export': [
			'warn',
			{
				allowArray: true,
				allowArrowFunction: true,
				allowAnonymousClass: true,
				allowAnonymousFunction: true,
				allowCallExpression: true, // The true value here is for backward compatibility
				allowLiteral: true,
				allowObject: true,
			},
		],
		'max-len': [
			'warn',
			{
				code: 120,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
	},
};
