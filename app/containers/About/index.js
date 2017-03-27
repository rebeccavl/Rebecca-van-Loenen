/*
 *
 * About
 *
 */

import React from "react";
import NavBar from "components/NavBar";
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
                    width:"50%",
                    height:"75%",
                    background:"#d4efdf",
                    opacity:".5"

                    }
    const aniBox= {
                  width: "100vw",
                  transition:"all 3s ease",
                  height:"100%",
                  background:"#d4efdf",
                  opacity:".5"
    }
    const titleStyle1={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:"4em",
                    fontVariant:"small-caps",
                    paddingTop:"300px",
                    color:"#ffffff"
                    }
    if(this.state.infoHover == true){
      return (
        <div style={aniBox} onMouseLeave = {this.leaveHover}>
          <div style={titleStyle1}> Who we are </div>
        </div>
      )
    }
    else if (this.state.infoHover == false){
      return (
        <div style={boxStyle1} onMouseEnter = {this.enterHover}>
          <div style={titleStyle1}> Who we are </div>
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



    return (

      <div>

        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <NavBar/>
        <main style={mainStyle}>
          <div style={rowStyle1}>
            {this.showInfo()}
          </div>

        </main>
        <Footer/>
      </div>
    );
  }
}
