### ShellTool
一些好用的shell脚本,比如常用的git操作集合等

### 目前有的脚本

#### 1. push  
``` bash  
push -m "commit信息"
```

#### 2. rebase  
``` bash  
quick_rebase 目标分支
```
#### 3. stash  
``` bash  
stash 目标分支
```
#### 4. set_gituser  
``` bash  

set_gituser
username: your username
email: your email
username is set successfullyQAQ
email is set successfullyQAQ

```

#### 5. upload  
服务器部署脚本案例，按照案例里面设置好对应的参数执行脚本即可  
对应的要填的参数已经在脚本里写好注释啦~
``` bash  

upload

```


### 便捷食用说明

可以用**npm link**命令,将脚本映射到全局中并全局安装需要的模块  
如果不想使用了的话，可以用**npm unlink**命令，将映射的脚本移除

### 灵感来自前辈

前辈是一个轮子哥(大佬),经常会自己造一些便利自己开发的小工具 [他在这里](https://github.com/bramblex)
