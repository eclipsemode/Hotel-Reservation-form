const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 4200,
    },
    entry: './index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        inject: 'body',
        template: "./views/index.pug"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: "[name].bundle.css"
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            },
            {
                from: path.resolve(__dirname, 'src/assets/images'),
                to: path.resolve(__dirname, 'dist/images')
            },
        ]
    }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: 'asset/inline',
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts",
                    }
                }]
            }
        ],
    }
};