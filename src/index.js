import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
import registerServiceWorker from './sw';

import { FirestoreProvider } from 'react-firestore';
import firebase from './firebase';

// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
registerServiceWorker();

ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>, 
document.getElementById('https://samokhinv.github.io/kultura'));
