import path from "path";
import { TBuildEnv, TBuildPaths, TMode } from "./config/types/types";
import { webpackBuildConfig } from "./config/webpackBuildConfig";

export default ({mode = 'development', port}: TBuildEnv) => {

  const paths: TBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "index.html"),
  };

  const isDev = mode === "development";

  const config = webpackBuildConfig({ paths, mode, isDev, port });
  return config;
};
