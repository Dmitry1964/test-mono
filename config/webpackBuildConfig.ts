import path from "path";
import webpack from "webpack";
import { webpackPlugins } from "./webpackPlugins";
import { webpackLoaders } from "./webpackLoaders";
import { webpackResolve } from "./webpackResolve";
import { TBuildOptions } from "./types/types";
import { webpackDevServer } from "./webpackDevServer";

export const webpackBuildConfig = (
  options: TBuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev, port } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].min.js",
      path: paths.output,
      clean: true,
    },
    plugins: webpackPlugins(options),
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolve(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? webpackDevServer(options) : undefined,
  };
};
