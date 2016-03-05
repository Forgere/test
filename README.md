1.git add<br>
	添加工作区内容的修改至缓存区。<br>
2.git commit<br>
	暂存区内容提交到仓库，加入历史记录线。<br>
3.git reset     git log（列出当前之前commit，不包括head指向之后的）<br>
	会退到上一次commit的版本 仅仅只是改变head指针<br>
4.git reset --hard commit号      git reflog（列出所有commit）<br>
	head指向任何一次版本<br>
5.git文件夹<br>
	a. stage = index =暂存区/缓存区<br>
	b. 包含自动创建的master分支，一个指向master分支的head指针。（指针只向哪看得就是哪的版本<br>
6.git checkout -- file<br>
	add前使用，撤销文件未提交到缓存区的修改；<br>
	还有一个情况，删除某文件后，也可撤销这个删除操作，条件是还未git rm；<br>
7.git reset HEAD file<br>
	让某文件从缓存区回退到工作区<br>
8.git remote add origin url<br>
	关联远程仓库<br>
9.git push -u origin master<br>
	将远程和本地的master分支关联起来<br>
10.git clone<br>
	clone 项目<br>
	<!-- 分支 -->
<<<<<<< HEAD
11.git checkout -b dev== git branch dev;git checkout dev（切换）<br>
	创建分支并切换到分支<br>
12.git branch<br>
	查看分支<br>
13.git merge dev<br>
	在主分支合并dev，快进模式本质就是将master的head指针指向dev的最新版本<br>
14.git merge --no-ff -m "" dev<br>
	普通模式合并（不使用快进模式）工作时可以常用。<br>
15.修复bug紧急<br>
	暂存现有工作区git stash<br>
	master创建一个分支；修复bug后回master合并；<br>
	git stash list查看stash位置；<br>
	git stash apply恢复工作区但不删除，需使用git stash drop删除<br>
	git stash pop恢复工作区的同时，删除stash;<br>
16.强制删除未合并的不需要分支<br>
	git branch -D branchname<br>
<!-- 多人协作 -->
17.git remote<br>
一般为origin<br>
	查看远程<br>
	git remote -v<br>
	查看远程<br>
	➜  test git:(master) git remote -v<br>
origin	git@github.com:Forgere/test.git (fetch) 接受地址<br>
origin	git@github.com:Forgere/test.git (push) 推送地址<br>
18.push分支<br>
  git push origin(远程名也就是git remote) master（推送的本地分支名，可以是任何一个本地分支）<br>
19.小伙伴一起开发/两台电脑开发<br>
	推送分支 git push --set-upstream origin dev<br>
	
=======
11.git checkout -b dev== git branch dev;git checkout dev（切换）<br>
	创建分支并切换到分支<br>
12.git branch<br>
	查看分支<br>
13.git merge dev<br>
	在主分支合并dev，快进模式本质就是将master的head指针指向dev的最新版本<br>
14.git merge --no-ff -m "" dev<br>
	普通模式合并（不使用快进模式）工作时可以常用。<br>
15.修复bug紧急<br>
	暂存现有工作区git stash<br>
	master创建一个分支；修复bug后回master合并；<br>
	git stash list查看stash位置；<br>
	git stash apply恢复工作区但不删除，需使用git stash drop删除<br>
	git stash pop恢复工作区的同时，删除stash;<br>
16.强制删除未合并的不需要分支<br>
	git branch -D branchname<br>
<!-- 多人协作 --><br>
17.git remote<br>
一般为origin<br>
	查看远程<br>
	git remote -v<br>
	查看远程<br>
	➜  test git:(master) git remote -v<br>
origin	git@github.com:Forgere/test.git (fetch) 接受地址<br>
origin	git@github.com:Forgere/test.git (push) 推送地址<br>
18.push分支<br>
  git push origin(远程名也就是git remote) master（推送的本地分支名，可以是任何一个本地分支）<br>
19.小伙伴一起开发/两台电脑开发<br>
	<br>
>>>>>>> add













