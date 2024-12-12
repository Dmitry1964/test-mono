import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TBuildOptions } from './types/types';

export const webpackPlugins = ({paths}: TBuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
         template: paths.html
        }),
        new webpack.ProgressPlugin(),
     ]
}