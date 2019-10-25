var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APLICATION_NAME = 'SegFitness';
const pathFolderApplication = path.resolve(__dirname, '../src');
const pathNodeModules = path.resolve(__dirname, '../node_modules');
const pathDistProduction = path.resolve(__dirname, '../dist');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglifyJsConfig = {
    test: /\.js(\?.*)?$/i,
    cache: true,
    parallel: true,
    uglifyOptions: {
        output: {
            ascii_only: true
        }
    }
};

module.exports = {
    entry: `${pathFolderApplication}/main.js`,
    output: {
        path: pathDistProduction,
        filename: `${APLICATION_NAME}.min.js`,
        chunkFilename: '[name].js'
    },
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					enforce: true,
					minChunks: 1,
					minSize: 60,
					name: `${APLICATION_NAME}.dependencies`,
					priority: -10,
					reuseExistingChunk: true,
                    maxAsyncRequests: 20,
                    maxInitialRequests: 20,
                    test: /[\\/]node_modules[\\/]/,
				},
				default: {
					chunks: 'async',
					minSize: 50000,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin(uglifyJsConfig),
		],
	},
    module: {
        noParse: [/moment.js/],
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, '../src/scss/index.scss'),
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
        new UglifyJsPlugin(uglifyJsConfig),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `${APLICATION_NAME}.min.css`
        }),
        new HtmlWebpackPlugin({
            template: `${pathFolderApplication}/index.html`,
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(pathFolderApplication),
            '@components': path.resolve(pathFolderApplication, 'components'),
            '@containers': path.resolve(pathFolderApplication, 'containers'),
            '@modules': path.resolve(pathFolderApplication, 'store/modules'),
            '@pages': path.resolve(pathFolderApplication, 'pages'),
            '@services': path.resolve(pathFolderApplication, 'services'),
            '@store': path.resolve(pathFolderApplication, 'store'),
            'images': path.resolve(pathFolderApplication, 'assets/images'),
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [
            pathNodeModules
        ]
    },
    watchOptions: {
        poll: true
    },
    performance: {
        hints: false
    },
    devtool: 'source-map'
};
