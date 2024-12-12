import path from 'path';
import webpack from 'webpack';
import { webpackPlugins } from './webpackPlugins';
import { webpackLoaders } from './webpackLoaders';
import { webpackResolve } from './webpackResolve';
import { TBuildOptions } from './types/types';

export const webpackBuildConfig = (options: TBuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].min.js",
            path: paths.output,
            clean: true
        },
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(),
          },
          resolve: webpackResolve(),
    }
}
