ChattyApp
=====================

A real-time ReactJS chat app built with Web Socket Server. 

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
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server
* babel-core: "6.23.1"
* babel-loader: "6.3.1"
* babel-preset-es2015: "6.22.0"
* babel-preset-react: "6.23.0"
* babel-preset-stage-0: "6.22.0"
* css-loader: "0.26.1"
* eslint: "3.15.0"
* eslint-plugin-react: "6.9.0"
* node-sass: "4.5.0"
* sass-loader: "6.0.0"
* sockjs-client: "^1.1.2"
* style-loader: "0.13.1"
* webpack: "2.2.1"
* webpack-dev-server: "2.3.0"
)

### Final Product
![HomeScreen](https://github.com/kkwon39/chattyapp/blob/master/Docs/HomeScreen.png)
![UserNameChange](https://github.com/kkwon39/chattyapp/blob/master/Docs/UserNameChange.png)
![UserChatting1](https://github.com/kkwon39/chattyapp/blob/master/Docs/UserChatting1.png)
![UserChatting2](https://github.com/kkwon39/chattyapp/blob/master/Docs/UserChatting2.png)
![CurrentlyOnlineUsers](https://github.com/kkwon39/chattyapp/blob/master/Docs/Currently%20Online%20Users.png)


