/*
 *
 * About
 *
 */

import React from "react";
import NavBar from "components/NavBar";
import Responsive from 'react-responsive';
import Footer from "components/Footer";
import Helmet from "react-helmet";
import {Link} from "react-router";
export default class About extends React.PureComponent {
  constructor(props){
      super(props);
      this.state={
        infoHover:false
      }
    }

    enterHover = () => {
      this.setState({
        infoHover:true
      })
    }
    leaveHover = () => {
      this.setState({
        infoHover:false
      })
  }
    showInfo = () => {
    const boxStyle1={
                    width:"75%",
                    height:"75%",
                    background:"rgba(212,239,223,0.5)",
                    margin:"0 auto"
                    }
  const boxStyle1m={
                    width:"75%",
                    height:"75%",
                    background:"#d4efdf",
                    opacity:".5",
                    margin:"auto 0"
                    }
     const aniBox= {//animation for information box
                    width: "95vw",
                    transition:"all 1s linear",
                    height:"80%",
                    background:"#A9DFBF",
                    margin:"0 auto",
                    borderRadius:"100px 0px 100px 10px"
                    }
  const titleStyle1={//initial text for aniBox
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"2em",
                    fontVariant:"small-caps",
                    paddingTop:"8%",
                    margin:"20px 20px",
                    color:"#000000",
                    textAlign:"center"
                    }
  const titleStyle2={//initial text for aniBox
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"2.5em",
                    fontVariant:"small-caps",
                    paddingTop:"2px",
                    margin:"20px 20px",
                    color:"#000000",
                    textAlign:"center",
                    fontWeight:"bold"
                    }
    if(this.state.infoHover == true){
      return (
        <div style={aniBox} onMouseLeave = {this.leaveHover}>
          <div style={titleStyle1}>We are a fun and funky married couple who daily seek new adventures.
           <br/>Our 'Wild'may be near by or miles away.
           <br/> Our blog shows you snippets of the adventures we take together.
          </div>
        </div>
      )
    }
    else if (this.state.infoHover == false){
      return (
        <div style={boxStyle1} onMouseEnter = {this.enterHover}>
          <div style={titleStyle1}> We are a fun and funky married couple <br/> who daily seek new adventures...</div>
          <p style={titleStyle2}> Hover to see more</p>
        </div>
      )
    }
  }
  render() {

    const mainStyle={
                    display: "flex",
                    flexDirection: "row"
                    }
    const rowStyle1={
                    width:"100%",
                    height:"800px",
                    background:"url(http://h4z.it/Image/09f9cc_18_26_39_Pro.jpg)",
                    backgroundSize:"100% 100%",
                    padding:"40px 40px"
                    }
  const rowStyle1m={
                    width:"100%",
                    height:"500px",
                    background:"url(http://h4z.it/Image/09f9cc_18_26_39_Pro.jpg)",
                    backgroundSize:"100% 100%"
                    }
     const aniBoxm= {
                    height:"70%",
                    background:"#A9DFBF",
                    margin:"80px 80px",
                    opacity:".8"
                    }
const titleStyle1m={
                   fontFamily:"Open Sans",
                   fontStyle:"normal",
                   fontSize:"1em",
                   fontVariant:"small-caps",
                   paddingTop:"10%",
                   margin:"20px 20px",
                   color:"#ffffff",
                   textAlign:"center"
                   }
    return (

      <div>

        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <NavBar page="About"/>
        <Responsive minDeviceWidth={1024}>
          <main style={mainStyle}>
            <div style={rowStyle1}>
              {this.showInfo()}
              </div>
            </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={mainStyle}>
            <div style= {rowStyle1m}>
              <div style= {aniBoxm}>
                <div style={titleStyle1m}>We are a fun and funky married couple who daily seek new adventures.
                 <br/>Our 'Wild'may be near by or miles away.
                 <br/> Our blog shows you snippets of the adventures we take together
                </div>
              </div>
            </div>
          </main>
        </Responsive>
        <Footer/>
      </div>
    );
  }
}
