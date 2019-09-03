const fs = require('fs')
var json = require('./test.json');

Object.keys(json).forEach(item => {
  fs.rename(item, item + ".html", err => {
    if (err) throw err;
    console.log(item + ' renamed!')
  })
})