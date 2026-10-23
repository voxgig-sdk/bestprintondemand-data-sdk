

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


describe('CostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BESTPRINTONDEMAND_DATA_TEST_LIVE=TRUE.
  afterEach(liveDelay('BESTPRINTONDEMAND_DATA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BestprintondemandDataSDK.test()
    const ent = testsdk.Cost()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BestprintondemandDataSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Cost().load({"limit":"x","query":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BESTPRINTONDEMAND_DATA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cost.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"summary":{"a":true,"h":"Summary","n":"summary","r":true,"sh":"The same answer as plain text, ready to quote, with the figures, the page each comes from and the basis they are stated on.","t":"`$STRING`","key$":"summary","index$":0}},"name":"cost","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /products/{product}/costs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"unisex-tee","k":"param","n":"product_id","or":"product","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"buyer_pays_shipping","or":"buyer_pays_shipping","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":"etsy","k":"query","n":"channel","or":"channel","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"sell_price","or":"sell_price","r":false,"t":"`$NUMBER`","index$":2}]},"k":"http","m":"GET","o":"/products/{product}/costs","q":{"exist":["product_id"]},"r":{"param":{"product":"product_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"products"},{"var":"product_id"},{"lit":"costs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /products","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":3,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"hoodie","k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/products","q":{"exist":["query"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"products"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"cost","name__orig":"cost","Name":"Cost","name_":"cost","name-":"cost","NAME":"COST","index$":1}, {"active":true,"entity":"cost","key$":"BasicCostFlow","kind":"basic","name":"BasicCostFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cost_ref01","srcdatavar":"cost_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cost_ref01"}}],"index$":0}]}, 'Cost', {"GET /products/{product}/costs":{"protocol":"http","parameters":[{"name":"product","in":"path","required":true,"description":"Product slug from find_products (e.g. \"unisex-tee\") or its name.","schema":{"type":"string","minLength":1,"maxLength":120},"example":"unisex-tee","index$":0},{"name":"sell_price","in":"query","required":false,"description":"Your sell price in USD, to compute profit per supplier.","schema":{"type":"number","exclusiveMinimum":0,"maximum":100000},"example":25,"index$":1},{"name":"channel","in":"query","required":false,"description":"Sales channel whose fees to subtract: etsy, shopify-own, woocommerce, tiktok-shop, walmart, ebay or amazon-seller.","schema":{"type":"string","maxLength":40},"example":"etsy","index$":2},{"name":"buyer_pays_shipping","in":"query","required":false,"description":"True when the buyer pays shipping on top of the sell price (default false: you cover shipping).","schema":{"type":"boolean"},"index$":3}]},"GET /products":{"protocol":"http","parameters":[{"name":"query","in":"query","required":true,"description":"Product type or blank, e.g. \"hoodie\", \"11oz mug\", \"Bella+Canvas 3001\".","schema":{"type":"string","minLength":1,"maxLength":120},"example":"hoodie","index$":0},{"name":"limit","in":"query","required":false,"description":"Most results to return (default 10).","schema":{"type":"integer","minimum":1,"maximum":25},"example":3,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cost_ref01_data = Object.values(setup.data.existing.cost)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const cost_ref01_ent = client.Cost()


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
      '../../../../.sdk/test/entity/cost/CostTestData.json')

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
    ['cost01','cost02','cost03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BESTPRINTONDEMAND_DATA_TEST_COST_ENTID': idmap,
    'BESTPRINTONDEMAND_DATA_TEST_LIVE': 'FALSE',
    'BESTPRINTONDEMAND_DATA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BESTPRINTONDEMAND_DATA_TEST_COST_ENTID']

  const live = 'TRUE' === env.BESTPRINTONDEMAND_DATA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BESTPRINTONDEMAND_DATA_TEST_COST_ENTID']
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
  
