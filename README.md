## qg-tool
常用的git操作集合

#### 便捷食用说明

```
npm install qg-tool -g
```

#### 1. qg push  

push 提交变更到当前分支的一系列集合操作

``` bash  
qg push -m "commit信息"
```

#### 2. qg rebase  

rebase 最新的目标分支

``` bash  
qg rebase 目标分支
```

#### 3. qg set-gituser  

设置git用户

``` bash  

qg set-gituser
username: your username
email: your email
username is set successfullyQAQ
email is set successfullyQAQ

```

#### 4. qg new-branch  

保存当前分支的变更，并将其移动到与主分支同步的新分支

``` bash  

qg new-branch 新分支

```

#### 5. qg reset-remote

远程分支覆盖本地分支

``` bash  

qg reset-remote

```