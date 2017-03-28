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
                    background:"#d4efdf",
                    opacity:".5",
                    margin:"30px 100px 30px 100px"
                    }
  const boxStyle1m={
                    width:"75%",
                    height:"75%",
                    background:"#d4efdf",
                    opacity:".5",
                    margin:"30px 100px 30px 100px"
                    }
     const aniBox= {
                    width: "95vw",
                    transition:"all 1s linear",
                    height:"80%",
                    background:"#A9DFBF",
                    margin:"40px 60px 40px 60px"
                    }
     const aniBoxm= {
                    width: "95vw",
                    transition:"all 1s linear",
                    height:"80%",
                    background:"#A9DFBF",
                    margin:"40px 60px 40px 60px"
                    }
  const titleStyle1={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"2em",
                    fontVariant:"small-caps",
                    paddingTop:"10%",
                    margin:"20px 20px",
                    color:"#ffffff",
                    textAlign:"center"
                    }
  const titleStyle1m={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"2em",
                    fontVariant:"small-caps",
                    paddingTop:"10%",
                    margin:"20px 20px",
                    color:"#ffffff",
                    textAlign:"center"
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
          <div style={titleStyle1}> Who We Are </div>
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
                    background:"url(http://h4z.it/Image/9ebecb_xxl_84931926.jpg)",
                    backgroundSize:"100% 100%"
                    }
  const rowStyle1m={
                    width:"100%",
                    height:"500px",
                    background:"url(http://h4z.it/Image/9ebecb_xxl_84931926.jpg)",
                    backgroundSize:"100% 100%"
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
            <div style={rowStyle1}>
              {this.showInfo()}
              </div>
            </main>
          </Responsive>
        <Footer/>
      </div>
    );
  }
}
