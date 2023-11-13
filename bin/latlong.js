#!/usr/bin/env node
'use strict';

const { fromAddress } = require('../');
const yargs = require('yargs');

(async () => {
  const coords = await fromAddress(yargs.argv._.slice(1));
  console.log(String(coords.lat) + ', ' + String(coords.long));
})().catch((err) => console.error(err));
