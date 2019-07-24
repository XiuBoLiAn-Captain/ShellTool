## quick-git-tool
常用的git操作集合

#### 便捷食用说明

```
 npm install quick-git-tool -g
```

#### 1. quick-push  

push 变更到分支的一系列集合操作

``` bash  
quick-push -m "commit信息"
```

#### 2. quick-rebase  

rebase 最新的目标分支

``` bash  
quick-rebase 目标分支
```

#### 3. quick-set-gituser  

设置git用户

``` bash  

quick-set-gituser
username: your username
email: your email
username is set successfullyQAQ
email is set successfullyQAQ

```

#### 4. quick-new-branch  

保存当前分支的变更，并将其移动到与主分支同步的新分支

``` bash  

quick-new-branch 新分支

```