# Git的学习

## Git的初始化配置

> git config --global user.name "Your Name"   **配置用户名**
> 
> git config --global user.email "gyro239@outlook.com" **配置邮箱** 
> 
> git config --global credential store **存储配置**

## 创建仓库

> git init <project-name>  
> 创建一个新的本地仓库 （省略project-name则在当前目录创建。）

## Git的工作区域

1. 工作区：就是你在电脑里能实际看到的目录。
2. 暂存区：暂存区也叫索引， 用来临时存放未提交的内容， 一般在.git目录下的index中。
3. 本地仓库：Git在本地的版本库， 仓库信息存储在.git这个隐藏目录中。
4. 远程仓库：托管在远程服务器上的仓库。 常用的有GitHub、 GitLab、 Gitee。

## 文件状态

1. 已修改：修改了但是没有保存到暂存区的文件。
2. 已暂存：修改后已经保存到暂存区的文件。
3. 已提交：把暂存区的文件提交到本地仓库后的状态。

## 添加和提交文件

1. **git status** 查看仓库的状态
2. **git add** 添加到暂存区（也可以使用通配符，例如：git add *.txt 也可以使用目录，例如：git add . ）
3. **git commit -m "message"** 提交所有暂存区的文件到本地仓库
4. **git commit -am "message"** 提交所有已修改的文件到本地仓库
5. **git log** 查看仓库历史提交记录（可以使用--oneline参数查看简洁的提交记录）
6. **git ls-files** 默认情况下，git ls-files 列出所有已跟踪的文件，包括已修改但尚未暂存的文件。

## git reset回退版本  
> 重置当前分支的HEAD为之前的某个提交， 并且删除所有之后的提交。

1. **git reset --hard** 表示重置工作区和暂存区。
2. **git reset --soft** 与mixed基本相似，保留了暂存区的内容。
3. **git reset --mixed** 与soft基本相似，不保留暂存区的内容。（为默认参数）

## 使用git diff 查看差异

1. **git diff** 查看未暂存的文件更新了哪些部分
2. **git diff <commit-id> <commit-id> / git diff HEAD~ HEAD** 查看两个提交之间的差异
3. **git diff HEAD** 查看工作区与版本库之间的差异
4. **git diff --cached / git diff --staged** 查看暂存区与版本库之间的差异
5. **git diff <branch_name> <branch_name>** 比较分支之间的差异

## 使用git rm删除文件
1. **rm file; git add file** 先从工作区删除文件,然后在暂存区删除内容
2. **git rm <file>** 把文件从工作区和暂存区同时删除
3. **git rm --cached <file>** 把文件从暂存区删除，但保留在当前工作区中
4. **git rm -r** * 递归删除某个目录下的所有子目录和文件
> 删除后不要忘记提交

## .gitignore忽略文件
1. **.gitignore** 忽略文件，不需要提交到仓库的文件
2. ***应该忽略哪些文件***
   1. 系统或者软件自动生成的文件
   2. 编译产生的中间文件和结果文件
   3. 运行时生成日志文件、缓存文件、临时文件
   4. 涉及身份、密码、口令、秘钥等敏感信息文件
3. 
