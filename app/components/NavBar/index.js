/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";
class NavBar extends React.PureComponent {

  render() {
  const navStyle={
                   margin:"0",
                   padding:"10px",
                   width:"100%",
                   fontFamily:"Open Sans",
                   borderTop:"2px solid #000000",
                   borderBottom:"1px solid #000000",
                   textAlign:"center",
                   }
  const linkStyle={
                   textDecoration:"none",
                   color:"#000000",
                   fontSize:"2em",
                   fontVariant:"small-caps",
                   textAlign:"center"
                   }
    return (
    <header>
      <nav style={navStyle}>
        <Link style={linkStyle} to= "/"> Home </Link>
        <Link style={linkStyle} to= "/About"> About </Link>
      </nav>
    </header>
    );
  }
}

export default NavBar;
