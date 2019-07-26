#!/usr/bin/env node

require('shelljs/global')

module.exports = (current_branch, arg) => {
  
  const aims_branch = arg._
  
  if(!exec('git status --porcelain')[0]) {
    
    exec('git checkout ' + aims_branch)
    echo('切换到'+ aims_branch +'分支')
    
    exec('git pull origin ' + aims_branch)
    echo('获取更新')
    
    exec('git checkout ' + current_branch)
    echo('切换回'+ current_branch +'分支')
    
    echo('正在变基')
    exec('git rebase ' + aims_branch)
    echo('变基成功')
  
  }else {
    echo('有未提交的变动')
  }

}