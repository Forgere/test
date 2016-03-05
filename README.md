1.git add
	添加工作区内容的修改至缓存区。
2.git commit
	暂存区内容提交到仓库，加入历史记录线。
3.git reset     git log（列出当前之前commit，不包括head指向之后的）
	会退到上一次commit的版本 仅仅只是改变head指针
4.git reset --hard commit号 git reflog（列出所有commit）
	head指向任何一次版本
5.git文件夹
	a. stage = index =暂存区/缓存区
	b. 包含自动创建的master分支，一个指向master分支的head指针。（指针只向哪看得就是哪的版本）
6.