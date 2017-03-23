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
                    flexDirection: "column"
                    }
    const rowStyle1={
                    width:"100%",
                    height:"600px",
                    background:"url(http://h4z.it/Image/6e0b78_07_59_29_Pro.jpg)",
                    backgroundSize:"contain"
                    }
    const boxStyle1={
                    width:"50%",
                    height:"100%",
                    background:"rgba(244,200,200,0.50)",
                    transition:"all",
                    transitionDuration:"1.2s",
                    transitionDirection:"right"
                    }
    const titleStyle1={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"4em",
                    paddingTop:"300px"
                    }
    const rowStyle2={
                    width:"100%",
                    height:"200px",
                    background:"#000000",
                    backgroundSize:"cover"
                    }
      const iStyle={
                    width:"50px",
                    height:"50px",
                    display:"block",
                    textIndent:"-9999px",
                    background:"url(https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png)",
                    backgroundRepeat:"no-repeat",
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

        <main style={mainStyle}>
          <div style={rowStyle1}>
            <div style={boxStyle1}>
              <div style={titleStyle1}> Who we are </div>
            </div>
          </div>
          <div style={rowStyle2}>
            <div style={iStyle}></div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}
