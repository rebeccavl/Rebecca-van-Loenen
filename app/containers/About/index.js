/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
export default class About extends React.PureComponent {
  render() {

    const mainStyle={
                    display: "flex",
                    flexDirection: "column",
                    background: "#000000"
                    }
    const rowStyle1={
                    width:"100%",
                    height:"600px",
                    background:"#000000",
                    backgroundSize:"cover"
                    }
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
                    textAlign:"center",
                    }

    return (

      <div>

        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <header>
        <nav style={navStyle}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link style={linkStyle} to= "/About"> About </Link>
        </nav>
        </header>

        <main></main>
        <footer></footer>
      </div>
    );
  }
}
