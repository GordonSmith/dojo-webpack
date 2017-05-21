var webpack = require("webpack");
var path = require("path");

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
    resolveLoader: {
        modulesDirectories: [
            path.resolve(__dirname, './node_modules/')
        ]
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
        loaders: [
            {
                test: /\.js$/,
                loader: "dojo-webpack-loader",
                include: path.resolve(__dirname, '../dojo/')
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader",
                query: { mimetype: "image/png" }
            }
        ]
    },

    dojoWebpackLoader: {
        // We should specify paths to core and dijit modules because we using both
        dojoCorePath: path.resolve(__dirname, './dojo/dojo'),
        dojoDijitPath: path.resolve(__dirname, './dojo/dijit'),

        // Languages for dojo/nls module which will be in result pack.
        includeLanguages: ['en', 'ru', 'fr']
    }

    // Minimal config if dijit package is not used:
    // dojoWebpackLoader: {
    //    dojoCorePath: path.resolve(__dirname, './dojo/dojo')
    //}


};
