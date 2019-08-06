#!/usr/bin/env node

require('shelljs/global')

module.exports = (current_branch, _) => {

  echo('获取变更')
  exec('git fetch --all')

  echo('回退线上版本')
  echo(`git reset --hard origin/${current_branch}`)

}