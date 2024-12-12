export type TMode = 'production' | 'development';

export type TBuildPaths = {
    entry: string;
    output: string;
    html: string;
}

export type BuildEnv = {
    port: number;
    
}

export type TBuildOptions = {
    mode: TMode;
    paths: TBuildPaths;
    isDev: boolean;

}