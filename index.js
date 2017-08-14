#!/usr/bin/env node
const https = require('https')

https
  .get('https://itsthisforthat.com/api.php?json', res => {
    res.on('data', d => {
      Promise.resolve(JSON.parse(d)).then(simile => {
        if (simile['this'].match(/(^A|^E|^I|^O|^U)/g)) {
          console.log(
            `So, basically, it's like an ${simile['this']} for ${simile['that']}!`
          )
        } else {
          console.log(
            `So, basically, it's like a ${simile['this']} for ${simile['that']}!`
          )
        }
      })
    })
  })
  .on('error', e => {
    throw new Error(e)
  })
