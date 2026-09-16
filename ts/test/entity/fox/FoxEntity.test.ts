

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RandomFoxSDK, BaseFeature, stdutil } from '../../..'

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('FoxEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RANDOM_FOX_TEST_LIVE=TRUE.
  afterEach(liveDelay('RANDOM_FOX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RandomFoxSDK.test()
    const ent = testsdk.Fox()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RANDOM_FOX_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'fox.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"image","req":true,"short":"URL of the random fox image","type":"`$STRING`","index$":0},{"active":true,"format":"uri","name":"link","req":true,"short":"Link to the fox image page","type":"`$STRING`","index$":1}],"name":"fox","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /floof","json":"{\"operationId\":\"getRandomFox\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"image\":\"https://randomfox.ca/images/42.jpg\",\"link\":\"https://randomfox.ca/?i=42\"},\"schema\":{\"properties\":{\"image\":{\"description\":\"URL of the random fox image\",\"example\":\"https://randomfox.ca/images/1.jpg\",\"format\":\"uri\",\"type\":\"string\"},\"link\":{\"description\":\"Link to the fox image page\",\"example\":\"https://randomfox.ca/?i=1\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"image\",\"link\"],\"type\":\"object\"}}},\"description\":\"Successful response with random fox image data\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/floof","segments":[{"lit":"floof"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"fox","name__orig":"fox","Name":"Fox","name_":"fox","name-":"fox","NAME":"FOX","index$":0}, {"active":true,"entity":"fox","key$":"BasicFoxFlow","kind":"basic","name":"BasicFoxFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"fox_ref01","srcdatavar":"fox_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-fox_ref01"}}],"index$":0}]}, 'Fox')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let fox_ref01_data = Object.values(setup.data.existing.fox)[0] as any

    // LOAD
    const fox_ref01_ent = client.Fox()
    const fox_ref01_match_dt0: any = {}
    const fox_ref01_data_dt0 = (await fox_ref01_ent.load(fox_ref01_match_dt0)).data()
    assert(null != fox_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/fox/FoxTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RandomFoxSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['fox01','fox02','fox03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RANDOM_FOX_TEST_FOX_ENTID': idmap,
    'RANDOM_FOX_TEST_LIVE': 'FALSE',
    'RANDOM_FOX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RANDOM_FOX_TEST_FOX_ENTID']

  const live = 'TRUE' === env.RANDOM_FOX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RANDOM_FOX_TEST_FOX_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RandomFoxSDK(merge([
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
    explain: 'TRUE' === env.RANDOM_FOX_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
