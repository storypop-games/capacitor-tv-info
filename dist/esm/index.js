import { registerPlugin } from '@capacitor/core';
const TvInfo = registerPlugin('TvInfo', {
    web: () => import('./web').then(m => new m.TvInfoWeb()),
});
export * from './definitions';
export { TvInfo };
//# sourceMappingURL=index.js.map