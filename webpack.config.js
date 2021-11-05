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
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'assets/images/[name][ext][query]'
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
                from: path.resolve(__dirname, 'src/style/assets/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            },
            // {
            //     from: path.resolve(__dirname, 'src/assets/images'),
            //     to: path.resolve(__dirname, 'dist/images')
            // },
        ]
    }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss|css$/i,
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
                type: 'asset/resource',
                generator: {
                    // filename: 'assets/img/[name].[ext]',
                    filename: 'assets/img/[hash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                },
            },
        ]
    }
};