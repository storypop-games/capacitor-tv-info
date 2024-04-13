'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const TvInfo = core.registerPlugin('TvInfo', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.TvInfoWeb()),
});

class TvInfoWeb extends core.WebPlugin {
    async isTv() {
        return { value: false };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TvInfoWeb: TvInfoWeb
});

exports.TvInfo = TvInfo;
//# sourceMappingURL=plugin.cjs.js.map
