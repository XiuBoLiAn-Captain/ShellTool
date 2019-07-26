#!/usr/bin/env node

require('shelljs/global')

module.exports = (current_branch, arg) => {
  
  if(arg.m) {
    
    echo('添加变更文件到暂存区...')
    exec('git add .')
    
    echo('添加变更信息...')
    exec('git commit -m ' + '"' + arg.m + '"')
    
    echo('push中...')
    exec('git push origin ' + current_branch)
    
    echo('完成')
    
  }else {
    echo('请添加commit信息')
  }

}