import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx'
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome'
import Trainer from './Trainer'


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    
    };
  
  }


  render(){
    return (
      <div>
      < Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
            <Route exact path='/trainer' component={Trainer} />
        </Switch>
      </div>
    );
  }
}



export default App;
