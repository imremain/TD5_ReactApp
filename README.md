# React APP - TD5 Presentation
Here you can fin all dependeces you'll need to run this project.

## Babel
Babel is a very popular tool for writing modern JavaScript and transforming it into code that any browser can understand.

`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader`

## Webpack
Webpack is a tool that helps us compile multiple files (JavaScript, HTML, CSS, images) into one (or sometimes a little more) that will have all our code ready for production.

Installation of Webpack and some plugins:
`npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev`

### Webpack Dev Server

`npm install --save-dev webpack-dev-server`

### Webpack Images
We are going to use File Loader to access the images of our project from the code.

Initially, these static files are located alongside the development code. But at compile time, Webpack will save the images to a new folder alongside the production code and update our components (or wherever we use the images) with the new file names and paths.

File Loader installation:
`npm install --save-dev file-loader`

## Sass Loader
Preprocessors like Sass are tools that allow us to write CSS with a slightly different and friendlier syntax that will later be transformed into normal CSS. Thanks to Sass we can write CSS with variables, mixins, loops, among other features.

Sass installation:
`npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader`

## ESLint
Linters like ESLint are tools that help us follow good practices or style guides of our code.
They are responsible for reviewing the code we write to indicate where we have errors or possible errors. In some cases they can also fix the errors automatically. In this way we can fix errors even before they happen.

ESLint installation:
`npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y`

## Firebase Realtime Database

The principal reason for choose Firebase Realtime Database was because We can use any Firebase Realtime Database URL as a REST endpoint. All we need to do is append .json to the end of the URL and send a request from our favorite HTTPS client.
Store and sync data with our NoSQL cloud database.
Data is stored as JSON and synchronized in realtime to every connected client.

URL: https://td5-presentation.firebaseio.com/
Endpoint: /members.json


