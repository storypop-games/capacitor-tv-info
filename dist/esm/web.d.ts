import { WebPlugin } from '@capacitor/core';
import type { TvInfoPlugin } from './definitions';
export declare class TvInfoWeb extends WebPlugin implements TvInfoPlugin {
    isTv(): Promise<{
        value: boolean;
    }>;
}
