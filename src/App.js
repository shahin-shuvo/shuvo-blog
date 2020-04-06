import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import BaseRouter from './routes'
import * as actions from './store/actions/auth';
import './index.css'
import './custom.css'

import CustomLayout from "./containers/Layout"

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
   

  }
  render() {
   
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
