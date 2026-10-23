

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BestprintondemandDataSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PriceChangeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BESTPRINTONDEMAND_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('BESTPRINTONDEMAND_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BestprintondemandDataSDK.test()
    const ent = testsdk.PriceChange()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BestprintondemandDataSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PriceChange().load({"product":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BESTPRINTONDEMAND_DATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'price_change.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"summary":{"a":true,"h":"Summary","n":"summary","r":true,"sh":"The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.","t":"`$STRING`","key$":"summary","index$":0}},"name":"price_change","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /price-changes","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"product","or":"product","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"printify","k":"query","n":"supplier","or":"supplier","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/price-changes","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"price-changes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"price_change","name__orig":"price_change","Name":"PriceChange","name_":"price_change","name-":"price-change","NAME":"PRICE_CHANGE","index$":2}, {"active":true,"entity":"price_change","key$":"BasicPriceChangeFlow","kind":"basic","name":"BasicPriceChangeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"price_change_ref01","srcdatavar":"price_change_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-price_change_ref01"}}],"index$":0}]}, 'PriceChange', {"GET /price-changes":{"protocol":"http","parameters":[{"name":"supplier","in":"query","required":false,"description":"Only this supplier's changes, e.g. \"Printful\".","schema":{"type":"string","minLength":1,"maxLength":60},"example":"printify","index$":0},{"name":"product","in":"query","required":false,"description":"Product slug or name (e.g. \"unisex-tee\"), for its price history at each supplier.","schema":{"type":"string","minLength":1,"maxLength":120},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let price_change_ref01_data = Object.values(setup.data.existing.price_change)[0] as any

    // LOAD
    const price_change_ref01_ent = client.PriceChange()
    const price_change_ref01_match_dt0: any = {}
    const price_change_ref01_data_dt0 = (await price_change_ref01_ent.load(price_change_ref01_match_dt0)).data()
    assert(null != price_change_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/price_change/PriceChangeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BestprintondemandDataSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['price_change01','price_change02','price_change03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BESTPRINTONDEMAND_DATA_TEST_PRICE_CHANGE_ENTID': idmap,
    'BESTPRINTONDEMAND_DATA_TEST_LIVE': 'FALSE',
    'BESTPRINTONDEMAND_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BESTPRINTONDEMAND_DATA_TEST_PRICE_CHANGE_ENTID']

  const live = 'TRUE' === env.BESTPRINTONDEMAND_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BESTPRINTONDEMAND_DATA_TEST_PRICE_CHANGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BestprintondemandDataSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
