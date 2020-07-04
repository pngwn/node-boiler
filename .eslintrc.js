module.exports = {
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
	},
	extends: ['eslint:recommended', 'prettier'],
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'array-callback-return': 2,
		'default-case': 2,
		'default-case-last': 2,
		'default-param-last': 2,
		'no-self-compare': 2,
		'no-useless-call': 2,
		'no-useless-concat': 2,
		'no-shadow': 2,
		'no-label-var': 2,
		radix: 2,
		'prefer-named-capture-group': 2,
		'no-template-curly-in-string': 2,
		'prefer-template': 2,
	},
};
