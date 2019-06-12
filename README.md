## quick-git-tool
常用的git操作集合

#### 便捷食用说明

```
 npm install quick-git-tool -g
```

直接下载源码的话，可以用**npm link**命令,将脚本映射到全局中并全局安装需要的模块  
如果不想使用了的话，可以用**npm unlink**命令，将映射的脚本移除

#### 1. quick-push  
``` bash  
quick-push -m "commit信息"
```

#### 2. quick-rebase  
``` bash  
quick-rebase 目标分支
```
#### 3. quick-stash  
``` bash  
quick-stash 目标分支
```
#### 4. quick-set-gituser  
``` bash  

quick-set-gituser
username: your username
email: your email
username is set successfullyQAQ
email is set successfullyQAQ

```

#### 5. upload（未添加，仅做示例）
服务器部署脚本案例，按照案例里面设置好对应的参数执行脚本即可  
对应的要填的参数已经在脚本里写好注释啦~
``` bash  

upload

```