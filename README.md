# vue-book

> A Vue.js project that is designed for the second-book-sale in HFI Programming's Project

## New Commit

> Please include a message which contains the purpose, the user, and the commit number:
For instance:
```bash
git commit -m "initial commit (1)"
git commit -m "edit README.MD (2)"
```

## Build Setup

1. If you do not have `npm` in your computer, then download one

2. Download Vue-cli to start the project

```bash
#download vue-cli
npm install -g vue-cli 

#go to your own directory
cd your-directory

#init vue.js webpack project
vue init webpack your-project-name

#confirm for several steps
```

3. Run the project with hot-reload
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

4. init git in the directory
``` bash
git init

git add .

git commit -m ''

# connect with remote repository at Git.hfi.me
git add remote origin master https://git.hfi.me/HFIProgramming/BookSale_Front
```

5. pull the resources from remote
```bash
git fetch -all 

git reset --hard origin/master
```