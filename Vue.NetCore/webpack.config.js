/// <binding BeforeBuild='Run - Development' />
"use strict";
var path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        main: "./ClientApp/main.ts"
    },
    output: {
        filename: "./wwwroot/[name].js"
    },
    resolve: {
        extensions: [".ts", ".vue", ".js"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": resolve("./ClientApp")
        }
    },
    module: {
        rules: [
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
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [
                        /\.vue$/
                    ]
                }
            }
        ]
    }
}