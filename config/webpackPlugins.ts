import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { TBuildOptions } from './types/types';

export const webpackPlugins = ({paths}: TBuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
         template: paths.html
        }),
        new MiniCssExtractPlugin(),
        new webpack.ProgressPlugin(),
     ]
}