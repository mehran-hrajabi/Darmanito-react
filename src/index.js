import React from 'react';
import ReactDOM from 'react-dom';
/*import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Link } from 'react-router-dom';*/
import App from '../src/containers/App';
import reportWebVitals from './reportWebVitals';
/*import reducer from './store/reducer';*/

/*const store = createStore(reducer);
const app = (
    <Provider store={store}>
      <Form />
    </Provider>
)*/
ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
