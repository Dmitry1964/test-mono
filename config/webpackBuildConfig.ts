import path from 'path';
import webpack from 'webpack';
import { webpackPlugins } from './webpackPlugins';
import { webpackLoaders } from './webpackLoaders';
import { webpackResolve } from './webpackResolve';

export const webpackBuildConfig = (): webpack.Configuration => {
    return {
        mode: "development",
        entry: path.resolve(__dirname, "src", "index.ts" ),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true
        },
        plugins: webpackPlugins(),
        module: {
            rules: webpackLoaders(),
          },
          resolve: webpackResolve(),
    }
}
