#!/usr/bin/env node

require('shelljs/global')

module.exports = (current_branch, arg) => {

  const aims_branch = arg._

  if (exec(`git rev-parse --verify ${aims_branch}`).code === 0) {
    echo('分支已存在')
    return
  }
  
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
}
