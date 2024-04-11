import { registerPlugin } from '@capacitor/core';

import type { TvInfoPlugin } from './definitions';

const TvInfo = registerPlugin<TvInfoPlugin>('TvInfo', {
  web: () => import('./web').then(m => new m.TvInfoWeb()),
});

export * from './definitions';
export { TvInfo };
