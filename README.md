1.git add
	添加工作区内容的修改至缓存区。
2.git commit
	暂存区内容提交到仓库，加入历史记录线。
3.git reset     git log（列出当前之前commit，不包括head指向之后的）
	会退到上一次commit的版本 仅仅只是改变head指针
4.git reset --hard commit号      git reflog（列出所有commit）
	head指向任何一次版本
5.git文件夹
	a. stage = index =暂存区/缓存区
	b. 包含自动创建的master分支，一个指向master分支的head指针。（指针只向哪看得就是哪的版本）
6.git checkout -- file
	add前使用，撤销文件未提交到缓存区的修改；
	还有一个情况，删除某文件后，也可撤销这个删除操作，条件是还未git rm；
7.git reset HEAD file
	让某文件从缓存区回退到工作区
8.git remote add origin url
	关联远程仓库
9.git push -u origin master
	将远程和本地的master分支关联起来
10.git clone
	clone 项目
	<!-- 分支 -->
11.git checkout -b dev== git branch dev;git checkout dev（切换）
	创建分支并切换到分支
12.git branch
	查看分支
13.git merge dev
	在主分支合并dev，快进模式本质就是将master的head指针指向dev的最新版本
14.git merge --no-ff -m "" dev
	普通模式合并（不使用快进模式）工作时可以常用。
15.修复bug紧急
	暂存现有工作区git stash
	master创建一个分支；修复bug后回master合并；
	git stash list查看stash位置；
	git stash apply恢复工作区但不删除，需使用git stash drop删除
	git stash pop恢复工作区的同时，删除stash;
16.强制删除未合并的不需要分支
	git branch -D branchname
<!-- 多人协作 -->
17.git remote
一般为origin
	查看远程
	git remote -v
	查看远程
	➜  test git:(master) git remote -v
origin	git@github.com:Forgere/test.git (fetch) 接受地址
origin	git@github.com:Forgere/test.git (push) 推送地址
18.push分支
  git push origin(远程名也就是git remote) master（推送的本地分支名，可以是任何一个本地分支）
19.小伙伴一起开发/两台电脑开发
	













