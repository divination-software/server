import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import * as CounterActions from '../actions/CounterActions';
import * as LoginActions from '../actions/LoginActions';
import * as ConnectActions from '../actions/ConnectActions';
import * as NewDataActions from '../actions/NewDataActions';
import Navbar from '../components/Navbar';
import DataComponent from '../components/DataComponent';
import Auth from '../components/Auth';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  componentDidMount() {
    this.props.connectActions.connect();
    this.props.newDataActions.listenForData();
    window.LOGIN = this.props.loginActions.openLogin.bind(this);
    axios.get('/api/users/auth')
    .then( response => {
      window.SIGNEDIN = true;
    })
    .catch( response => {} );
  }
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, loginActions, children, user, newData, newDataActions, auth } = this.props;
    return (
      <div className="main-app-container">
        <DataComponent newData={newData} newDataActions={newDataActions} />
        <Auth auth={auth} user={user} loginActions={loginActions} />
        <Navbar Link={Link} />
          {React.Children.map(children, child =>
            React.cloneElement(child, { counter, user, loginActions }),
          )}
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  newData: PropTypes.object.isRequired,
  newDataActions: PropTypes.object.isRequired,
  loginActions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};


function mapStateToProps(state) {
  return {
    counter: state.counter,
    user: state.user,
    newData: state.newData,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(CounterActions, dispatch),
    loginActions: bindActionCreators(LoginActions, dispatch),
    connectActions: bindActionCreators(ConnectActions, dispatch),
    newDataActions: bindActionCreators(NewDataActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
