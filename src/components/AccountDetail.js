import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser }  from '../actions';


function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}


function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}




export default connect(mapStateToProps,  mapDispatchToProps)(UserDetail);
