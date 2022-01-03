# News App

## FreeCodeCamp Tutorial
[https://www.freecodecamp.org/news/build-an-android-news-app-with-react-native-and-native-base/](https://www.freecodecamp.org/news/build-an-android-news-app-with-react-native-and-native-base/)

## News API
Sign up for a news API key: [https://newsapi.org/](https://newsapi.org/)

## Get Started

Create config:

```bash
mkdir config
touch config/config.js
```

config.js:

```js
export const API_KEY = `API_KEY`;
export const endpoint = `https://newsapi.org/v2/top-headlines`;
export const country = 'in';
```

Running the App:

```
yarn
yarn start
```
