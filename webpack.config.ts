import path from "path";
import { TBuildEnv, TBuildPaths, TMode } from "./config/types/types";
import { webpackBuildConfig } from "./config/webpackBuildConfig";

export default ({mode, port}: TBuildEnv) => {

  const paths: TBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "index.html"),
    copyFrom: path.resolve(__dirname, "public"),
  };

  const isDev = mode === "development";

  const config = webpackBuildConfig({ paths, mode, isDev, port });
  return config;
};
