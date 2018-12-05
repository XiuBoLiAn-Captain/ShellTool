#!/usr/bin/env node

require('shelljs/global')
const argv = require('yargs').argv

//当前分支
const current_branch = exec('git rev-parse --abbrev-ref HEAD').split(',')[0]

const aims_branch = argv._

if(!exec('git status --porcelain')[0]) {
  
  exec('git checkout ' + aims_branch)
  echo('切换到'+ aims_branch +'分支')
  
  exec('git pull origin ' + aims_branch)
  echo('获取更新')
  
  exec('git checkout ' + current_branch)
  echo('切换回'+ current_branch +'分支')
  
  echo('正在变基=_=')
  exec('git rebase ' + aims_branch)
  echo('你变基啦!QAQ')

}else {
  echo('有未提交的变动哦0.0')
}