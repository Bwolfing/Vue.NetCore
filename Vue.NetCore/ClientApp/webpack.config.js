"use strict";
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    output: {
        filename: "../wwwroot/[name].js"
    },
    resolve: {
        extensions: [".ts", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": resolve("src")
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [
                        /\.vue$/
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    sass: {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    esModule: true
                }
            }
        ]
    }
}