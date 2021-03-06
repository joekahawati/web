import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';
import {usePromiseTracker} from "react-promise-tracker"
import Loader from "react-loader-spinner";

const store=createStore(allReducer);

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
  
    return ( promiseInProgress && <div className="spinner"> 
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div> 
    ); 
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <LoadingIndicator/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
