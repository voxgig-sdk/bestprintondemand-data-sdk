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
(0, node_test_1.describe)('PriceChangeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BESTPRINTONDEMAND_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BESTPRINTONDEMAND_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BestprintondemandDataSDK.test();
        const ent = testsdk.PriceChange();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BestprintondemandDataSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PriceChange().load({ "product": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BESTPRINTONDEMAND_DATA_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'price_change.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "summary": { "a": true, "h": "Summary", "n": "summary", "r": true, "sh": "The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.", "t": "`$STRING`", "key$": "summary", "index$": 0 } }, "name": "price_change", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /price-changes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "product", "or": "product", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "printify", "k": "query", "n": "supplier", "or": "supplier", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/price-changes", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "price-changes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "price_change", "name__orig": "price_change", "Name": "PriceChange", "name_": "price_change", "name-": "price-change", "NAME": "PRICE_CHANGE", "index$": 2 }, { "active": true, "entity": "price_change", "key$": "BasicPriceChangeFlow", "kind": "basic", "name": "BasicPriceChangeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "price_change_ref01", "srcdatavar": "price_change_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-price_change_ref01" } }], "index$": 0 }] }, 'PriceChange', { "GET /price-changes": { "protocol": "http", "parameters": [{ "name": "supplier", "in": "query", "required": false, "description": "Only this supplier's changes, e.g. \"Printful\".", "schema": { "type": "string", "minLength": 1, "maxLength": 60 }, "example": "printify", "index$": 0 }, { "name": "product", "in": "query", "required": false, "description": "Product slug or name (e.g. \"unisex-tee\"), for its price history at each supplier.", "schema": { "type": "string", "minLength": 1, "maxLength": 120 }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let price_change_ref01_data = Object.values(setup.data.existing.price_change)[0];
        // LOAD
        const price_change_ref01_ent = client.PriceChange();
        const price_change_ref01_match_dt0 = {};
        const price_change_ref01_data_dt0 = (await price_change_ref01_ent.load(price_change_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != price_change_ref01_data_dt0);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/price_change/PriceChangeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BestprintondemandDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['price_change01', 'price_change02', 'price_change03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BESTPRINTONDEMAND_DATA_TEST_PRICE_CHANGE_ENTID': idmap,
        'BESTPRINTONDEMAND_DATA_TEST_LIVE': 'FALSE',
        'BESTPRINTONDEMAND_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['BESTPRINTONDEMAND_DATA_TEST_PRICE_CHANGE_ENTID'];
    const live = 'TRUE' === env.BESTPRINTONDEMAND_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BESTPRINTONDEMAND_DATA_TEST_PRICE_CHANGE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BestprintondemandDataSDK(merge([
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
        explain: 'TRUE' === env.BESTPRINTONDEMAND_DATA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=PriceChangeEntity.test.js.map