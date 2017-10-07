# next-app

sudo npm install pm2 -g

npm run build
pm2 start npm --name "next" -- start

pm2 show 0
pm2 stop 0

[react-toolbox 說明]
1) 在package.json include要用的元件
2) npm run toolbox 產生theme.css & theme.js至 static folder


[Clear babel cache]
rm -rfv ./node_modules/.cache/babel-loader/*

componentWillMount -> render -> componentDidMount
----------------------------- (server only)
------------------------------------------------- (server+client))
