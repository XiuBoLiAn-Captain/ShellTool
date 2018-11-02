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
let current_branch = exec('git rev-parse --abbrev-ref HEAD').split(',')[0]

console.log(current_branch)
if(argv.m) {
  echo('拉取分支更新...')
  exec('git pull origin ' + current_branch)
  
  echo('添加变更文件到暂存区...')
  exec('git add .')
  
  echo('添加变更信息...')
  exec('git commit -m ' + '"' + argv.m + '"')
  
  echo('push中...')
  exec('git push origin ' + current_branch)
  
  echo('完成')
}else {
  echo('请添加注释')
}