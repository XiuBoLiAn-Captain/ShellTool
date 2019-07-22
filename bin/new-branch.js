#!/usr/bin/env node

require('shelljs/global')
const argv = require('yargs').argv

//判定git命令是否可用
if (!which('git')) {
  //向命令行打印git命令不可用的提示信息
  echo('Sorry, this script requires git')
  //退出当前进程
  exit(1)
}

//获取当前分支名
const current_branch = exec('git rev-parse --abbrev-ref HEAD').split(',')[0]
const aims_branch = argv._

if(!aims_branch) {
  echo('请输入生成的新分支名')
  exit(1)
}

try {
  echo('存储变更...')
  exec('git stash')

  echo('获取主分支最新变动...')
  if(current_branch === 'master') {
    exec('git pull')
  }else {
    exec('git checkout master')
    exec('git pull')
  }

  echo('生成新分支...')
  exec('git checkout -b ' + aims_branch)

  echo('应用变更...')
  exec('git stash pop')

} catch(err) {
  echo(err)
  exit(1)
}
