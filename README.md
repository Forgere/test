1.git add 
	添加工作区内容至缓存区。
2.git commit
	提交到仓库，加入历史记录线。
3.git reset     git log（列出当前之前commit，不包括head指向之后的）
	会退到上一次commit的版本 仅仅只是改变head指针
4.git reset --hard commit号 git reflog（列出所有commit）
	head指向任何一次版本
5.git 