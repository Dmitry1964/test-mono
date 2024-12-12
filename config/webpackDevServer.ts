import {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import { TBuildOptions } from './types/types';

export const webpackDevServer = ({port}: TBuildOptions): DevServerConfiguration => {
    return {
        port,
        open: true,
    }
}