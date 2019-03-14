import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import rome from '../public/images/rome.png';
import space3 from '../public/images/space3.jpg'

let img = {
  width: '130px',
  height: '130px',
  position: 'absolute',
  right: '-250px',
}
let img2 = {
  width: '130px',
  height: '130px',
  position: 'absolute',
  right: '715px',
}

let header = {
  backgroundImage:'url(' + space3 + ')',
  height:'180px',
  borderRadius:'20px',
  border:'3px solid black'
}

let title = {
  fontSize:'100px',
  position:'relative',
  right:'-580px',
  fontFamily: 'Times New Roman,Times, serif',
}

function Header(){

  return (
    <div>
    <AppBar style={header} position="static" color="default">
      <Toolbar>
        <Typography   variant="h6" color="inherit">
          <p style={title}><img style={img2} src={rome}/> <img style={img} src={rome}/>Digital Trainer</p>
        </Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default Header;
