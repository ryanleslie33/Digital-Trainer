import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TestDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render(){
    return (<p>This is the TestDisplay Component.</p>
    )
  }
}

export default TestDisplay;
