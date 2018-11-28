#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');

require('shelljs/global')

co(function*() {
   const username = yield prompt('username: ')
   const email = yield prompt('email: ')
   const ok = yield prompt.confirm('are you sure?(yes|no)');
   if(ok) {
     exec('git config --global user.name "'+ username + '"' )
     echo('username is set successfullyQAQ')
     exec('git config --global user.email "'+ email + '"' )
     echo('email is set successfullyQAQ')
     echo('git config --global --list')
   }
   process.exit();
})