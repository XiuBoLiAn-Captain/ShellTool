#!/usr/bin/env node

require('shelljs/global')
const argv = require('yargs').argv

const rebase = require('./bin/rebase')
const newbranch = require('./bin/new-branch')
const push = require('./bin/push')
const gituser = require('./bin/set-gituser')
const stash = require('./bin/stash')
const resetremote = require('./bin/reset-rb')

//判定git命令是否可用
if (!which('git')) {
  //向命令行打印git命令不可用的提示信息
  echo('Sorry, this script requires git')
  //退出当前进程
  exit(1)
}
//获取当前分支名
const current_branch = exec('git rev-parse --abbrev-ref HEAD').split(',')[0]

const argArr = { ...argv }

const command = argArr._.shift().replace('-', '') // 这里把第一个指令过滤出来

eval(`${command}`)(current_branch, argArr)

exit(1)