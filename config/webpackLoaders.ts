import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { TBuildOptions } from './types/types';

export const webpackLoaders = ({isDev}: TBuildOptions): webpack.RuleSetRule[] => {
    const tsLoader =         {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }

      const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }

    return [
        tsLoader,
        cssLoader,
      ]
}