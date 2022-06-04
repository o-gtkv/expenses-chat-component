require('dotenv').config()
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    mode: process.env.MODE,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        filename: 'app.bundle.js',
        clean: true
    },

    devtool: process.env.MODE === 'production' ? 'source-map' : 'eval',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['jpegtran', { progressive: true }]
                        ]
                    }
                }
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HTMLWebpackPlugin({
            // filename: path.join(__dirname, 'assets/index.html'),
            template: path.join(__dirname, 'src/assets/index.html'),

        }),
        new ESLintPlugin({
            failOnWarning: true,
            extensions: ['js', 'jsx']
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.jpg$/,
                type: 'asset/resource'
            },
        ]
    },

    devServer: {
        hot: true,
        historyApiFallback: true

        // static: {
        // directory: './build'
        // }
    }
}