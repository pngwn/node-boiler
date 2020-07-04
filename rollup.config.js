import cjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'index.js',
	plugins: [cjs(), resolve()],
	output: {
		file: 'dist/index.js',
		format: 'cjs',
	},
};
