/*
 *
 * About
 *
 */

import React from 'react';
import NavBar from "components/NavBar";
import Footer from "components/Footer";
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
                    background:"#A9DFBF",
                    backgroundSize:"contain"
                    }
    const boxStyle1={
                    width:"50%",
                    height:"50%",
                    background:"rgba(244,200,200,0.50)",
                    transition:"width 3s ease-out",
                    }
    const titleStyle1={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"4em",
                    paddingTop:"300px",
                    color:"#ffffff"
                    }


    return (

      <div>

        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <NavBar/>
        <main style={mainStyle}>
          <div style={rowStyle1}>
            <div style={boxStyle1}>
              <div style={titleStyle1}> Who we are </div>
            </div>
          </div>

        </main>
        <Footer/>
      </div>
    );
  }
}
