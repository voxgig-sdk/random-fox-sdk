"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('FoxEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RANDOM_FOX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RANDOM_FOX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RandomFoxSDK.test();
        const ent = testsdk.Fox();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RANDOM_FOX_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'fox.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "image": { "a": true, "fo": "uri", "h": "Image", "n": "image", "r": true, "sh": "URL of the random fox image", "t": "`$STRING`", "key$": "image", "index$": 0 }, "link": { "a": true, "fo": "uri", "h": "Link", "n": "link", "r": true, "sh": "Link to the fox image page", "t": "`$STRING`", "key$": "link", "index$": 1 } }, "name": "fox", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /floof", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/floof", "q": {}, "r": {}, "s": [{ "lit": "floof" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "fox", "name__orig": "fox", "Name": "Fox", "name_": "fox", "name-": "fox", "NAME": "FOX", "index$": 0 }, { "active": true, "entity": "fox", "key$": "BasicFoxFlow", "kind": "basic", "name": "BasicFoxFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "fox_ref01", "srcdatavar": "fox_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-fox_ref01" } }], "index$": 0 }] }, 'Fox', { "GET /floof": { "protocol": "http", "operationId": "getRandomFox", "responses": { "200": { "description": "Successful response with random fox image data", "content": { "application/json": { "schema": { "type": "object", "properties": { "image": { "description": "URL of the random fox image", "example": "https://randomfox.ca/images/1.jpg", "format": "uri", "key$": "image", "type": "string" }, "link": { "description": "Link to the fox image page", "example": "https://randomfox.ca/?i=1", "format": "uri", "key$": "link", "type": "string" } }, "required": ["image", "link"], "index$": 0 }, "example": { "image": "https://randomfox.ca/images/42.jpg", "link": "https://randomfox.ca/?i=42" } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let fox_ref01_data = Object.values(setup.data.existing.fox)[0];
        // LOAD
        const fox_ref01_ent = client.Fox();
        const fox_ref01_match_dt0 = {};
        const fox_ref01_data_dt0 = (await fox_ref01_ent.load(fox_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != fox_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/fox/FoxTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RandomFoxSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['fox01', 'fox02', 'fox03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RANDOM_FOX_TEST_FOX_ENTID': idmap,
        'RANDOM_FOX_TEST_LIVE': 'FALSE',
        'RANDOM_FOX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RANDOM_FOX_TEST_FOX_ENTID'];
    const live = 'TRUE' === env.RANDOM_FOX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RANDOM_FOX_TEST_FOX_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RandomFoxSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RANDOM_FOX_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=FoxEntity.test.js.map