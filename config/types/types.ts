export type TMode = 'production' | 'development';

export type TBuildPaths = {
    entry: string;
    output: string;
    html: string;
    copyFrom: string;
}

export type TBuildEnv = {
    port: number;
    mode: TMode;
}

export type TBuildOptions = {
    mode: TMode;
    paths: TBuildPaths;
    isDev: boolean;
    port: number;
}