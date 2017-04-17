/*
 *
 * Single
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
export default class Single extends React.PureComponent {

constructor (props){
  super(props);
  this.state={
    article:""

  }
}
componentWillMount(){
  fetch("http://localhost:8000/api/showArticle/"+this.props.params.id)
  .then(function(res){
    return res.json();
  })
  .then(function(json){
    this.setState({
      article:json
    })
  }.bind(this))
}


  render() {
    const mainStyle={
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center"
                      }
    const boxStyle={
                      width:"75%",
                      height:"600px",
                      background:"#d4efdf",
                      margin:"50px"
                      }
const titleStyle={
                  fontFamily:"Open Sans",
                  fontStyle:"normal",
                  fontSize:"1.5em",
                  fontVariant:"small-caps",
                  textAlign:"center",
                  padding:".5%"
                  }
    const bodyStyle={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      fontVariant:"small-caps",
                      textAlign:"center",
                      padding:".5%"
                      }
    return (
      <div>
        <Helmet title="Posts" meta={[ { name: 'description', content: 'Description of Single' }]}/>
        <NavBar page="Posts"/>
        <main style={mainStyle}>
          <div style={boxStyle}>
            <div style={titleStyle}>{this.state.article.title}</div>
            <div style={bodyStyle}>{this.state.article.body}</div>
            {this.state.article.image}
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
