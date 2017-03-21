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
    const divStyle={
                    width:"60%",
                    height:"800px",
                    background: "#7fffd4",
                    display:"flex",
                    flexDirection:"column",

                    }
    const divStyle2={
                    width:"40%",
                    height:"800px",
                    background:"#009976"
                    }
    const divStyle3={
                    width:"100%",
                    height:"200px",
                    background: "#000000",
                    color:"#ffffff",
                    textAlign:"center"
                   }
    const divStyle4={
                    width:"85%",
                    height:"300px",
                    background:"url(http://h4z.it/Image/b8e6a3_hansnbecca.jpg)",
                    backgroundSize:"cover",
                    margin:"25px",
                    textAlign:"center",
                    color:"#ffffff"
                    }
    const mainStyle={
                    display: "flex",
                    flexDirection: "wrap",
                    backbround: "(#0000ff)"
                    }
    const postStyle={
                      width:"100%",
                      height:"100px",
                      background:"#4dffc3",
                      textAlign:"left justify",
                      textIndent:"10px",
                      color:"#ffffff"
                      }
    const postStyle2={
                      width:"100%",
                      height:"100px",
                      background:"#33ffbb",
                      textAlign:"left justify",
                      textIndent:"10px",
                      color:"#fffffa"
                      }
     const postStyle3={
                      width:"100%",
                      height:"100px",
                      background:"#1affb2",
                      textAlign:"left justify",
                      textIndent:"10px",
                      color:"#fffffa"
                      }
  const titleStyle={
                    fontFamily:"Times New Roman",
                    fontStyle:"normal",
                    fontSize:"4em"
                   }
  const titleStyle2={
                    fontFamily:"Times New Roman",
                    fontStyle:"normal",
                    fontSize:"1em"
                    }
   const titleStyle3={
                      fontFamily:"Times New Roman",
                      fontStyle:"normal",
                      fontSize:"5em"
                      }
    return (
      <div>

        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <nav>
            <Link to= "/"> Home </Link>
            <Link to= "/About"> About </Link>
          </nav>
        </header>
        <main style={mainStyle}>

          <div style={divStyle}>
            <div style={divStyle4}>
             <div style={titleStyle}>Hans & Becca In The Wild</div></div>
            <div style={postStyle}><div style={titleStyle2}>Daily Wild: Post 1...</div></div>
            <div style={postStyle2}><div style={titleStyle2}>Daily Wild: Post 2...</div></div>
            <div style={postStyle3}><div style={titleStyle2}>Daily Wild: Post 3...</div></div>
          </div>
          <div style={divStyle2}>
            <div style={divStyle3}><div style={titleStyle3}>Our Story</div></div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}
