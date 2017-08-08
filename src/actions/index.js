import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


export const USER_SELECTED = "USER_SELECTED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";

export function selectUser(userId) {
  return {
    type: USER_SELECTED,
    payload: userId
  };
}

/************************************
You will need to create a selectAccount
action creator here, it will take a type, and
payload: accountId
************************************/
export function selectUser(userId) {
  return {
    type: ACCOUNT_SELECTED,
    payload: accountIds
  };
}
export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    //need to change the amount to an integer value
    payload: parseInt(amount, 10)
  }
}
