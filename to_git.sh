echo "# next-app" >> README.md
git init
git add README.md
git commit -m ""
git remote add origin https://github.com/winxp1981/next-app.git
git push -u origin master

git add .
git reset -- node_modules/
git commit -m ""
git push -u origin master
