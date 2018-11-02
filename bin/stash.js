#!/usr/bin/env node

require('shelljs/global')
const argv = require('yargs').argv

//目标分支
const aims_branch = argv._

echo('存储变更...')
exec('git stash')

echo('切换分支到' + aims_branch)
exec('git checkout ' + aims_branch)

echo('变更完成QAQ')
exec('git stash pop')