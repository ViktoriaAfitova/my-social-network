import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi', likesCount: 12},
  {id: 2, message: 'Hi, how are you?', likesCount: 11}
]

let personalityData = [
  {id: 1, name: 'Ira'},
  {id: 2, name: 'Katya'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Maks'},
  {id: 5, name: 'Vova'},
  {id: 6, name: 'Vika'}
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 1, message: 'How are you?'},
  {id: 1, message: 'Yo'},
  {id: 1, message: 'Yey'},
  {id: 1, message: 'Yo'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} personalityData={personalityData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
