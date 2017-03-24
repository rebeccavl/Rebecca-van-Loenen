/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Notification from "material-ui/svg-icons/notification/live-tv";
export default class Home extends React.PureComponent {
  render() {
    const column1={
                   width:"60%",
                   height:"auto",
                   textAlign:"center",
                   color:"#ffffff",
                   }
     const column1m={
                   width:"100%",
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
       const box1m={
                   width:"100%",
                   height:"50%",
                   background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                   backgroundSize:"contain",
                  }
     const column2={
                   width:"40%",
                   height:"auto",
                   background:"#009976"
                   }
    const column2m={
                   width:"100%",
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
    const boxStyle2m={
                    width:"100%",
                    height:"40%",
                    background:"#000000",
                    color:"#ffffff",
                    textAlign:"center"
                    }
    const mainStyle={
                    display: "flex",
                    flexDirection: "row",
                    background: "#0000ff"
                    }
    const postStyle={
                     width:"100%",
                     height:"100px",
                     background:"#d4efdf",
                     textAlign:"left justify",
                     textIndent:"10px",
                     color:"#000000"
                     }
     const postStylem={
                      width:"100%",
                      height:"16.7%",
                      background:"#d4efdf",
                      textAlign:"center",
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
    const postStyle2m={
                      width:"100%",
                      height:"16.7%",
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
    const postStyle3m={
                     width:"100%",
                     height:"16.7%",
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
    const titleStylem={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1em",
                      paddingTop:"50%"
                      }
    const titleStyle2={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1em"
                      }
    const titleStyle2m={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em"
                      }
    const titleStyle3={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"4em",
                      paddingTop:"80px"
                      }
   const titleStyle3m={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      paddingTop:"0"
                      }
 const animationStyle={
                      width:"100%",
                      height:"600px"
                      }
const animationStylem={
                      width:"100%",
                      height:"60%"
                      }
    const mobileStyle={
                      height:"500px",
                      width:"100%",
                      display:"flex",
                      flexDirection:"column",
                      }
    return (
      <div>

        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <NavBar/>
         <Responsive minDeviceWidth={1024}>
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
                <div style={titleStyle3}>Grow old along with me.<br/>
                 The best is yet to be.
                </div>
              </div>
                <img style={animationStyle} src="https://media.giphy.com/media/3o7qE4p0MDWCMWs52M/giphy.gif"/>
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={mobileStyle}>
            <div style={column1m}>
                <div style={box1m}>
                  <div style={titleStylem}>Hans & Becca | In The Wild</div>
              </div>
              <div style={postStylem}>
                <div style={titleStyle2m}>Daily Wild | Post 1
                  <p/>Today we experienced the Redwoods of Northern California. These huge trees stretching as far up as the eye can see are quite the site to see!
                </div></div>
                <div style={postStyle2m}><div style={titleStyle2m}>Daily Wild | Post 2...</div></div>
                <div style={postStyle3m}><div style={titleStyle2m}>Daily Wild | Post 3...</div></div>
            </div>
            <div style={column2m}>
              <div style={boxStyle2m}>
                <div style={titleStyle3m}>Grow old along with me!<br/>
                 The best is yet to be.
                </div>
              </div>
                <img style={animationStylem} src="https://media.giphy.com/media/3o7qE4p0MDWCMWs52M/giphy.gif"/>
            </div>
          </main>
          <Footer/>
        </Responsive>



      </div>
    );
  }
}
