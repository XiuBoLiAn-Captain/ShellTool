#!/usr/bin/env node

require('shelljs/global')
require('shelljs-plugin-ssh')
const path = require('path')
const scp2 = require('scp2')
const SSH2Promise = require('ssh2-promise')

//1. 填充私钥
const privateKey = ``

//2. 添加配置
const config = {
  host: '',
  port: '',
  username: '',
  privateKey
}

//ssh链接
const ssh = new SSH2Promise(config)

//3. 补充路径
const PATH = ''

//ssh连接
async function main() {
  const current_path = process.cwd()
  console.log(current_path)
  const file_name = current_path.split('\\').pop()
  //4. 添加文件夹判断
  if(file_name !== 'xx') {
    console.log('请在xx文件夹下执行此脚本')
    return
  }
  console.log('编译中...')
  exec('npm run build')
  console.log('编译完成')

  console.log('2.部署至服务器')
  await ssh.connect()
  console.log('SSH 链接成功')
  
  //5. 完善服务器中的路径
  const deployPath = path.join(PATH, '\/build')
  echo(deployPath)
  console.log('清理目录', deployPath)
  await ssh.exec(`rm -rf ${deployPath}`)

  console.log('上传至服务器')
  await new Promise((resolve, reject) => scp2.scp('build/', { ...config, path: deployPath }, (err) => err ? reject(err) : resolve()))
  console.log('上传成功')

  await ssh.close()
  console.log('SSH 链接关闭')

}

main()
