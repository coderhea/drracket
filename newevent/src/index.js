import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* 328 SPA & Routes
<BrowserRouter>, (redux 사용시 Provider도 필요) 로 <App /> 감싸고
Page 중 indexPage에서 export default 설정, 
이후 App.js의 render되는 부분에서  Routes & component={PAGENAME} 설정 */