var webpack = require("webpack");
var path = require("path");
var dwlOptions = require("dojo-webpack-loader/defaultOptions");

dwlOptions.dojoCorePath = path.resolve(__dirname, './dojo/dojo');
dwlOptions.dojoDijitPath = path.resolve(__dirname, './dojo/dijit');
dwlOptions.include = path.resolve(__dirname, '../dojo/');
dwlOptions.includeLanguages = ['en', 'ru', 'fr'];

var entry_list = [
    "index"
];
var entry = {};
entry_list.forEach(function (e) { entry[e] = path.resolve(__dirname, "./src/" + e) });

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "dist/",
        filename: "dgrid.js",
        libraryTarget: "umd",
        library: "HPCCDGrid"
    },
    resolve: {
        alias: {
            "dojo": path.resolve(__dirname, './dojo/dojo'),
            "dstore": path.resolve(__dirname, './dojo/dstore'),
            "dijit": path.resolve(__dirname, './dojo/dijit'),
            "dgrid": path.resolve(__dirname, './dojo/dgrid')
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["dojo-webpack-loader"]
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" }
            }
        ]
    }
};
