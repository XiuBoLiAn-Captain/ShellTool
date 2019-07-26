#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');

require('shelljs/global')

module.exports = () => co(function*() {
   const username = yield prompt('username: ')
   const email = yield prompt('email: ')
   const ok = yield prompt.confirm('are you sure?(yes|no)');
   if(ok) {
     exec('git config --global user.name "'+ username + '"' )
     echo('用户名设置成功')
     exec('git config --global user.email "'+ email + '"' )
     echo('邮箱设置成功')
     echo('git config --global --list')
   }
   process.exit();
})