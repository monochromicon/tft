#!/usr/bin/env node

const request = require('request')

request.get('http://itsthisforthat.com/api.php?json', (err, res, body) => {
  if (err) throw new Error(err)
  Promise.resolve(JSON.parse(body)).then(simile => {
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
