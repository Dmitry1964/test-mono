import path from 'path';
import { TBuildPaths, TMode } from './config/types/types';
import { webpackBuildConfig } from './config/webpackBuildConfig';

const mode: TMode = 'development';

const paths: TBuildPaths= {
    entry: path.resolve(__dirname, "src", "index.ts" ),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "index.html")
}

const isDev = mode === 'development'

const config = webpackBuildConfig({paths, mode, isDev})

export default config;