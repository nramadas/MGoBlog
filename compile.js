var webpack = require("webpack");
var argv    = require("yargs").argv;
var path    = require("path");

var compiler = webpack({
    context: path.resolve(__dirname, "./lib"),
    entry: "./CreateApp.js",
    output: {
        path: path.resolve(__dirname, "./static/bin"),
        filename: "App.js",
        sourceMapFilename: "[name].map",
    },
    eslint: {
        configFile: path.resolve(__dirname, "./.eslintrc"),
        failOnError: true,
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                optional: [
                    "runtime",
                    "es7.asyncFunctions",
                    "es7.classProperties",
                    "es7.comprehensions",
                ],
            },
        }],
        preLoaders: [{
            test: /\.js/,
            exclude: /(node_modules)/,
            loader: "eslint-loader",
        }],
    },
    devtool: "source-map",
});

if (argv.watch) {
    console.log("Watching...");
    compiler.watch({}, function(err, stats) {
        console.log(stats.toString({
            colors: true,
        }));
    });
} else {
    console.log("Building javascript...");
    compiler.run(function(err, stats) {

    });
}
