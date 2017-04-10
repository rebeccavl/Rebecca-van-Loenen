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
  constructor(props){
    super(props);
    this.state={
      infoHover:{index:null,hover:false},

      articles:[
        {
          title:"West Coast",
          body:"Exploring Oregon",
        },
        {
          title:"East Coast",
          body:"Hello Mountains!",
        },
        {
          title:"Georgia On My Mind",
          body:"Our Cookout on the lake",
        },
      ]
    }
  }
  enterHover = (index, event) => {
    var hoverObject = {
      index: index,
      hover: true
    }
    this.setState({
      infoHover:hoverObject
    })
    console.log(this.state.infoHover);
  }

  leaveHover = () => {
    var hoverObject = {
      index: null,
      hover: false
    }
    this.setState({
      infoHover:hoverObject
    })
  }
    renderArticle = (article, index) =>{
      const postStyle={
                       width:"34%",
                       height:"400px",
                       background:"#d4efdf",
                       textAlign:"left justify",
                       textIndent:"5px",
                       color:"#000000",
                       margin:"30px",
                       boxShadow:"2px 4px 10px #000000"
                       }
     const titleStyle2={
                       fontFamily:"Open Sans",
                       fontStyle:"normal",
                       fontSize:"2em",
                       fontVariant:"small-caps",
                       textAlign:"center",
                       padding:"20%"
                       }
  const aniPost= {
    width:"36%",
    height:"410px",
    background:"#d4efdf",
    textAlign:"left justify",
    textIndent:"5px",
    color:"#000000",
    margin:"30px",
    boxShadow:"2px 4px 10px #000000",
    transition:"all 1s linear",
  }

  if(this.state.infoHover.index === index){
    return(
      <div style={aniPost} onMouseLeave = {this.leaveHover}>
        <div style={titleStyle2}>{article.title} | {article.body}
        </div>
      </div>
    )
  }
  else {
    return(
      <div style={postStyle} onMouseEnter = {(index, event) => this.enterHover(index, event)}>
        <div style={titleStyle2}>{article.title} | {article.body}
        </div>
      </div>
    )
  }

    }
  render() {
    const column1={
                   width:"100%",
                   height:"auto",
                   textAlign:"center",
                   color:"#ffffff",
                   background:"#ffffff",

                   }
     const column1m={
                   width:"100%",
                   height:"400px",
                   textAlign:"center",
                   color:"#000000",
                   }
        const box1={
                   width:"95%",
                   height:"700px",
                   background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                   backgroundSize:"cover",
                   margin:"30px 30px",
                   }
       const box1m={
                   width:"100%",
                   height:"50%",
                   background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                   backgroundSize:"contain",
                   opacity:"0.9"

                  }
     const column2={
                   width:"100%",
                   height:"auto",
                   background:"#ffffff",
                   display: "flex",
                   flexDirection:"row"
                   }
    const column2m={
                   width:"100%",
                   height:"auto",
                   background:"#009976"
                   }
    const column3={
                   width:"100%",
                   height:"auto",
                   background:"#ffffff",
                   display: "flex",
                   flexDirection:"row"
                   }
    const boxStyle2={
                    width:"50%",
                    height:"300px",
                    background: "#000000",
                    color:"#ffffff",
                    textAlign:"center",
                    margin:"30px"
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
                    flexDirection: "column",
                    background: "#0000ff",
                    }

     const postStylem={
                      width:"98%",
                      height:"15%",
                      background:"#d4efdf",
                      textAlign:"center",
                      textIndent:"10px",
                      color:"#000000",
                      margin:"3px",
                      boxShadow:"1px 2px 5px #000000"
                      }
    const titleStyle={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"4em",
                      fontVariant:"small-caps",
                      paddingTop:"300px"
                      }
    const titleStylem={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      fontVariant:"small-caps",
                      paddingTop:"30%"
                      }

    const titleStyle2m={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em",
                      fontVariant:"small-caps",
                      }
    const titleStyle3={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"2em",
                      paddingTop:"80px",
                      fontVariant:"small-caps",
                      }
   const titleStyle3m={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      }
    const titleStyle4={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      }
    const titleStyle5={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      }
 const animationStyle={
                      width:"50%",
                      height:"300px",
                      background:"url(https://media.giphy.com/media/3o7qE4p0MDWCMWs52M/giphy.gif)",
                      backgroundSize:"100% 100%",
                      margin:"30px",
                      }
const animationStylem={
                      width:"100%",
                      height:"5%"
                      }
    const mobileStyle={
                      width:"100%",
                      display:"flex",
                      flexDirection:"column",
                      }
        const overall={
                      display: "flex",
                      flexDirection:"column",
                      justifyContent:"space-between"
                      }
        const fStyle={
                      alignItems:"flex-end"
                      }

    return (
      <div style={overall}>

        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <NavBar page="Home"/>
        <Responsive minDeviceWidth={1024}>
          <main style={mainStyle}>
            <div style={column1}>
              <div style={box1}>
                <div style={titleStyle}>Hans & Becca | In The Wild
                </div>
                <div style={titleStyle4}>a blog about our adventures near and far
                </div>
              </div>
            </div>
            <div style={column2}>
            {this.state.articles.map((article,i) => (
              this.renderArticle(article,i)
            ))}
            </div>
            <div style={column3}>
              <div style={boxStyle2}>
                <div style={titleStyle3}>Not all who wonder are lost.
                <div style={titleStyle5}> J.R.R. Tolkien></div>
                </div>
              </div>
              <div style={animationStyle}>
              </div>
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={mobileStyle}>
            <div style={column1m}>
                <div style={box1m}>
                  <div style={titleStylem}>Hans & Becca | In The Wild</div>
              </div>
              {this.state.articles.map((article,i) => (
                <div style={postStylem}>
                  <div style={titleStyle2m}>{article.title} | {article.body}
                  </div>
                </div>
              ))}
              </div>
            <div style={column2m}>
              <div style={boxStyle2m}>
                <div style={titleStyle3m}>Not all who wonder are lost.
                </div>
              </div>
                <img style={animationStylem} src="https://media.giphy.com/media/3o7qE4p0MDWCMWs52M/giphy.gif"/>
            </div>
          </main>
        </Responsive>
        <Footer/>
      </div>
    );
  }
}
