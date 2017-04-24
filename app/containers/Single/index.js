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
    article:"",
    commentBody:"",
    token:sessionStorage.getItem('token'),//gets the toekn of a logged-in user
    comments:[]

  }
}
componentWillMount(){
  fetch("http://localhost:8000/api/showArticle/"+this.props.params.id)//fetches the page articles
  .then(function(res){
    return res.json();
  })
  .then(function(json){
    this.setState({
      article:json
    })
  }.bind(this))

  fetch('http://localhost:8000/api/getComments/'+this.props.params.id)//fetches the page comments from the backend
  .then(function(res){
    return res.json();
  })
  .then(function(json){
    this.setState({
      comments:json
    })
  }.bind(this))
}

handleComment = (event) => {
  this.setState({
    commentBody: event.target.value
  })
}

storeComment = () => {
  var data = new FormData();
  data.append("body",this.state.commentBody);
  data.append("articleID",this.props.params.id);
  fetch("http://localhost:8000/api/storeComment?token="+this.state.token,{
    method:"post",
    body:data
  })

  .then(function(res){
    return res.json();
  })

  .then(function(json){
    if(json.error)
    {
      alert(json.error);
    }
    else if (json.success)
    {
      alert(json.success);
    }
  })

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
                      fontSize:"2em",
                      fontVariant:"small-caps",
                      textAlign:"justifyLeft",
                      padding:"2%"
                      }
    const bodyStyle={
                      fontFamily:"Open Sans",
                      fontStyle:"normal",
                      fontSize:"1.5em",
                      fontVariant:"small-caps",
                      textAlign:"center",
                      padding:".5%"
                      }
        const iStyle={
                      width:"100px",
                      height:"100px",
                      backgroundSize:"5%",
                      margin:"4%",
                      border:"solid",
                      borderColor:"#000000"
                     }
      const postStyle={//box surrounding all comments
                      display:"flex",
                      flexDirection:"column",
                      }
        const cStyle={//comment box style
                      width:"400px",
                      height:"300px",
                      background:"#ffffff",
                      border:"1px solid #000000",
                      fontFamily:"Open Sans",
                      fontSize:"1em",
                      fontVariant:"small-caps",
                      }
         const nStyle={//text style for Name
                      fontFamily:"Open Sans",
                      fontSize:"1em",
                      fontVariant:"small-caps",
                      margin:"30px",
                      height:"auto",
                      width:"200px",
                      background:"#ffffff",
                      border:"2px solid",
                      }
         const bStyle={//comment body style
                      fontFamily:"Open Sans",
                      fontSize:"1em",
                      fontVariant:"small-caps",
                      margin:"30px",
                      height:"100px",
                      width:"300px",
                      background:"#ffffff",
                      border:"1px solid #000000"
                      }
   const commentStyle={//comment box style
                      fontFamily:"Open Sans",
                      fontSize:"1em",
                      fontVariant:"small-caps",
                      height:"100px",
                      width:"400px",
                      background:"#ffffff",
                      border:"2px solid #000000"
                      }
    const submitStyle={
                      fontFamily:"Open Sans",
                      fontSize:"1em",
                      paddingTop:"0",
                      fontVariant:"small-caps",
                      margin:"30px",
                      height:"50px",
                      width:"100px",
                      border:"1px solid",
                      background:"#ffffff",
                      boxShadow:"1px 2px 10px #000000",
                     }
    return (
      <div>
        <Helmet title="Posts" meta={[ { name: 'description', content: 'Description of Single' }]}/>
        <NavBar page="Posts"/>
        <main style={mainStyle}>
          <div style={boxStyle}>
            <div style={titleStyle}>
              <img style={iStyle} img src={this.state.article.image}/>{this.state.article.title}
            </div>
            <div style={bodyStyle}>{this.state.article.body}</div>
          </div>
          <div style={postStyle}>Post A Comment
            <div style={cStyle}>
              <textarea placeholder="Your comments here" style={bStyle} onChange={this.handleComment}></textarea>
              <input type="submit" style={submitStyle} onTouchTap={this.storeComment}/>
            </div>
            {this.state.comments.map((comment,i) => (
              <div style={commentStyle}>
                {comment.commentDate} | {comment.name}
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}
