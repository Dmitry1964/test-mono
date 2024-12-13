import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { TBuildOptions } from './types/types';
import path from 'path';

export const webpackPlugins = ({paths}: TBuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
         template: paths.html
        }),
        new MiniCssExtractPlugin(),
        new webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: paths.copyFrom,
                    to: paths.output
                }
            ]
        })
     ]
}