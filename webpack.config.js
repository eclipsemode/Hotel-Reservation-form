/* eslint-disable no-undef */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");



module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 4200,
    },
    entry: "./index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
    new HtmlWebpackPlugin({
        filename: "index.html",
        inject: "body",
        template: "./index.pug",
    }),
    new HtmlWebpackPlugin({
        filename: "search.html",
        inject: "body",
        template: "./search.pug",
    }),
    new HtmlWebpackPlugin({
        filename: "room.html",
        inject: "body",
        template: "./room.pug",
    }),
    new MiniCssExtractPlugin({
        filename: "[name].bundle.css"
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, "src/assets/favicon.ico"),
                to: path.resolve(__dirname, "dist")
            },
            {
                from: path.resolve(__dirname, "src/assets/images/rooms"),
                to: path.resolve(__dirname, "dist/assets/images/rooms")
            }
        ]
    }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss|css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                        options: {
                            pretty: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[hash][ext][query]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext][query]"
                },
            },
        ]
    }
};