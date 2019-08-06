#!/usr/bin/env node

require('shelljs/global')

module.exports = (_, arg) => {
  //code !== 0为执行失败
  //目标分支
  const aims_branch = arg._
  if (exec(`git rev-parse --verify ${aims_branch}`).code !== 0) {
    echo('分支不存在')
    return
  }
  
  echo('存储变更...')
  exec('git stash')
  
  echo('切换分支到' + aims_branch)
  exec('git checkout ' + aims_branch)
  
  echo('变更完成QAQ')
  exec('git stash pop')
}