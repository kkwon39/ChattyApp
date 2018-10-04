ChattyApp
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the chattyapp and chattyserver into two seperate directories.

```
git clone https://github.com/kkwon39/chattyapp
git clone https://github.com/kkwon39/chattyserver
cd chattyapp
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000


```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This ChattyApp includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Final Product
![HomeScreen](https://github.com/kkwon39/tweeter/blob/master/docs/Homepage.png)
![UserNameChange](https://github.com/kkwon39/tweeter/blob/master/docs/Hover%20Over%20Tweet.png)
![UserChatting1](https://github.com/kkwon39/tweeter/blob/master/docs/Hide%20Compose.png)
![UserChatting2](https://github.com/kkwon39/tweeter/blob/master/docs/Empty%20Error.png)
![CurrentlyOnlineUsers](https://github.com/kkwon39/tweeter/blob/master/docs/Too%20long%20Error.png)


