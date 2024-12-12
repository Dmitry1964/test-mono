import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const webpackPlugins = (): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "index.html")
        }),
        new webpack.ProgressPlugin(),
     ]
}