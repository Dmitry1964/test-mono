import webpack from 'webpack';

export const webpackResolve = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}