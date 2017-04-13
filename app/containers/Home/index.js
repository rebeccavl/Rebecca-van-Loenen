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

      articles:[]
    }
  }
  componentWillMount(){
    fetch("http://localhost:8000/api/getArticles")
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      this.setState({
        articles:json
      })
    }.bind(this))
  }
  enterHover = (index) => {
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
                       minWidth:"30%",
                       maxWidth:"100%",
                       display:"flex",
                       flexDirection:"column",
                       height:"400px",
                       background:"#d4efdf",
                       textAlign:"center",
                       textIndent:"5px",
                       color:"#000000",
                       margin:"15px",
                       alignItems:"center",
                       boxShadow:"2px 4px 10px #000000"
                       }
     const imageStyle={
                       width:"100px",
                       height:"100px",
                       background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                       backgroundSize:"5%",
                       margin:"4%",
                       border:"solid",
                       borderColor:"#000000",

                        }
     const titleStyle2={
                       fontFamily:"Open Sans",
                       fontStyle:"normal",
                       fontSize:"2em",
                       fontVariant:"small-caps",
                       textAlign:"center",
                       padding:".5%"
                       }
     const titleStyle6={
                       fontFamily:"Open Sans",
                       fontStyle:"normal",
                       fontSize:"1.5em",
                       fontVariant:"small-caps",
                       textAlign:"center",
                       padding:".5%"
                       }
        const aniPost= {
                        minWidth:"33%",
                        width:"102%",
                        height:"430px",
                        background:"#d4efdf",
                        display:"flex",
                        flexDirection:"column",
                        textAlign:"left justify",
                        alignItems:"center",
                        textIndent:"5px",
                        color:"#000000",
                        margin:"10px",
                        boxShadow:"4px 8px 20px #000000",
                        transition:"all .5s linear",
                        }

//animates the blog posts
  if(this.state.infoHover.index === index){
    return(
      <div style={aniPost} onMouseLeave = {this.leaveHover}>
        <img style= {imageStyle} img src={article.image}/>
        <div style={titleStyle2}>{article.title} </div>
        <div style={titleStyle6}>{article.body}</div>
      </div>
    )
  }
  else {
    return(
      <div style={postStyle} onMouseEnter = {this.enterHover.bind(this,index)}>
        <img style={imageStyle} img src={article.image}/>
        <div style={titleStyle2}>{article.title} </div>
        <div style={titleStyle6}>{article.body}</div>
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
                   height:"170px",
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
                   width:"83%",
                   height:"150px",
                   background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                   backgroundSize:"contain",
                   opacity:"0.9",
                   margin:"25px",
                   alignItems:"center",
                   boxShadow:"1px 2px 5px #000000"
                   }
     const column2={
                    width:"100%",
                    maxWidth:"80%",
                    margin:"0 auto",
                    height:"auto",
                    background:"#ffffff",
                    display: "flex",
                    flexDirection:"row",
                    justifyContent:"space-around",
                    }
     const column2m={
                     width:"100%",
                     height:"auto",
                     display:"flex",
                     flexDirection:"column",
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
    const boxStyle2m={//
                      width:"100%",
                      height:"60%",
                      background:"#ffffff",
                      color:"#000000",
                      textAlign:"center"
                      }
      const mainStyle={
                      display: "flex",
                      flexDirection: "column",
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
    const titleStyle={//text for Hans and Becca graphic-box1
                      fontFamily:"Lobster",
                      fontStyle:"normal",
                      fontSize:"4.5em",
                      paddingTop:"300px"
                      }
    const titleStylem={//text for Hans and Becca graphic-box1m
                      fontFamily:"Lobster",
                      fontWeight:"700",
                      fontStyle:"normal",
                      fontSize:"1.2em",
                      paddingTop:"35%",
                      color:"#ffffff"
                      }
    const titleStyle2m={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em",
                      fontVariant:"small-caps",
                      }
    const titleStyle3={
                      fontFamily:"Lobster",
                      fontStyle:"normal",
                      fontSize:"3em",
                      paddingTop:"80px",
                      }
   const titleStyle3m={//text for boxStyle2m. Not all who wander...
                      fontFamily:"Lobster",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      paddingTop:"0",
                      margin:"15px",
                      }
    const titleStyle4={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      }
  const titleStyle4m={//text for ...JRR Tolkien
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em",
                      paddingBottom:"3px",
                      fontVariant:"small-caps",
                      color:"#ffffff"
                      }
    const titleStyle5={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      }
  const titleStyle5m={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:".5em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      }
 const animationStyle={//animation for blog posts
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

        <Helmet title="Home" meta={[{ name: 'description', content: 'Description of Home' }]}/>
        <NavBar page="Home"/>
        <Responsive minDeviceWidth={1024}>
          <main style={mainStyle}>
            <div style={column1}>
              <div style={box1}>
                <div style={titleStyle}>Hans & Becca | In The Wild</div>
                <div style={titleStyle4}>a blog about our adventures near and far</div>
              </div>
            </div>
            <div style={column2}>
            {this.state.articles.map((article,i) => (
              this.renderArticle(article,i)
            ))}
            </div>
            <div style={column3}>
              <div style={boxStyle2}>
                <div style={titleStyle3}>Not all who wander are lost.
                <div style={titleStyle5}> J.R.R. Tolkien</div>
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
                <div style={titleStyle4m}>a blog about our adventures near and far</div>
              </div>
            </div>
            <div style={column2m}>
              {this.state.articles.map((article,i) => (
                this.renderArticle(article,i)
              ))}
              <div style={boxStyle2m}>
                <div style={titleStyle3m}>Not all who wander are lost.
                  <div style={titleStyle5m}> J.R.R. Tolkien
                  </div>
                </div>
                <img style={animationStylem} src="https://media.giphy.com/media/3o7qE4p0MDWCMWs52M/giphy.gif"/>
              </div>
            </div>
          </main>
        </Responsive>
        <Footer/>
      </div>
    );
  }
}
