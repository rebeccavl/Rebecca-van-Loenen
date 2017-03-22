/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
export default class Home extends React.PureComponent {
  render() {
    const column1={
                   width:"60%",
                   height:"auto",
                   textAlign:"center",
                   color:"#ffffff",
                   }
        const box1={
                   width:"100%",
                   height:"700px",
                   background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                   backgroundSize:"cover",
                   }
     const column2={
                   width:"40%",
                   height:"auto",
                   background:"#009976"
                   }
    const boxStyle2={
                    width:"100%",
                    height:"400px",
                    background: "#000000",
                    color:"#ffffff",
                    textAlign:"center"
                    }
    const mainStyle={
                    display: "flex",
                    flexDirection: "wrap",
                    backbround: "(#0000ff)"
                    }
    const postStyle={
                     width:"100%",
                     height:"100px",
                     background:"#d4efdf",
                     textAlign:"left justify",
                     textIndent:"10px",
                     color:"#000000"
                     }
    const postStyle2={
                      width:"100%",
                      height:"100px",
                      background:"#A9DFBF",
                      textAlign:"left justify",
                      textIndent:"10px",
                      color:"#000000"
                      }
     const postStyle3={
                      width:"100%",
                      height:"100px",
                      background:"#7DCEA0",
                      textAlign:"left justify",
                      textIndent:"10px",
                      color:"#000000"
                      }
     const titleStyle={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"4em",
                      paddingTop:"300px"
                      }
    const titleStyle2={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1em"
                      }
    const titleStyle3={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"4em",
                      paddingTop:"80px"
                      }
 const animationStyle={
                      width:"100%",
                      height:"600px"
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

        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <nav style={navStyle}>
            <Link style={linkStyle} to= "/"> Home </Link>
            <Link style={linkStyle} to= "/About"> About </Link>
          </nav>
        </header>

        <main style={mainStyle}>

          <div style={column1}>
            <div style={box1}>
              <div style={titleStyle}>Hans & Becca | In The Wild</div>
            </div>
            <div style={postStyle}>
              <div style={titleStyle2}>Daily Wild | Post 1
                <p/>Today we experienced the Redwoods of Northern California. These huge trees stretching as far up as the eye can see are quite the site to see!
              </div></div>
            <div style={postStyle2}><div style={titleStyle2}>Daily Wild | Post 2...</div></div>
            <div style={postStyle3}><div style={titleStyle2}>Daily Wild | Post 3...</div></div>
          </div>
          <div style={column2}>
            <div style={boxStyle2}>
              <div style={titleStyle3}>Grow old along with me!<br/>
               The best is yet to be.
              </div>
            </div>
              <img style={animationStyle} src="https://media.giphy.com/media/3o7qE4p0MDWCMWs52M/giphy.gif"/>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}
