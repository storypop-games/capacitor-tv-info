import { WebPlugin } from '@capacitor/core';

import type { TvInfoPlugin } from './definitions';

export class TvInfoWeb extends WebPlugin implements TvInfoPlugin {
  async isTv(): Promise<{ value: boolean }> {
    return { value: false };
  }
}
