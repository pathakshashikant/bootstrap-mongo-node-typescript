const path = require('path');

const nodeExternals = require('webpack-node-externals');

const WebpackShellPlugin = require('webpack-shell-plugin-next');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const devServer = process.env.NODE_ENV.trim() !== 'production';
const serverMode = process.env.NODE_ENV.trim();

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/bin/www.ts'),
	},

	target: 'node',

	mode: serverMode,

	watch: devServer,
	externals: [nodeExternals()],

	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
	},

	resolve: {
		extensions: ['.ts', '.js'],
		// alias: {
		// 	Utilities: path.resolve(__dirname, 'src/features/'),
		// },
	},

	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new WebpackShellPlugin({
			onBuildStart: {
				scripts: ['echo "Webpack Start"'],
				blocking: true,
				parallel: false,
			},
			onBuildEnd: {
				scripts: devServer ? ['npm run run:dev'] : ['npm run run:prod'],
				blocking: true,
				parallel: false,
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: devServer ? 'tsconfig.json' : 'tsconfig.prod.json',
							transpileOnly: true,
						},
					},
				],
			},
		],
	},
};
