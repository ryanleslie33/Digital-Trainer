import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx'
import { Switch, Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome'
import Trainer from './Trainer'
import c from './../constants';
import { connect } from 'react-redux';
import ApiDisplay from './ApiDisplay';
import TestDisplay from './TestDisplay';

let action;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render(){
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/trainer' component={Trainer} />
        </Switch>
      <ApiDisplay/>
      </div>
    );
  }
}

App.propTypes = {
  excerciseList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    excerciseList: state.excercise
  };
};


export default withRouter(connect(mapStateToProps)(App));
