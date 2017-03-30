/*
 *
 * Blog
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import Responsive from 'react-responsive';
 import {Link} from "react-router";
 import NavBar from "components/NavBar";
 import Footer from "components/Footer";
export default class Dashboard extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      title:"",
      body:"",
      image:"",
      preview:"",
    }
  }
  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  handleBody = (event) => {
    this.setState({
      body:event.target.value
    })
  }
  handleImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }
  storeArticle = () => {
    var data = new FormData();
    data.append("title",this.state.title);
    data.append("body",this.state.body);
    data.append("image",this.state.image);
    fetch("http://localhost:8000/api/storeArticle", {
      method:"post",
      body:data
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.error){
        alert("error");
      }
      else if (json.succes) {
        alert("succes");
      }
    })
  }
  render() {
const titleStyle={
                fontFamily:"Open Sans",
                fontSize:"1em",
                fontVariant:"small-caps",
                margin:"30px",
                height:"autopx",
                width:"300px",
                background:"#ffffff",
                border:"2px solid",
                }
const bodyStyle={
                fontFamily:"Open Sans",
                fontSize:"1em",
                fontVariant:"small-caps",
                margin:"30px",
                height:"100px",
                width:"300px",
                background:"#ffffff",
                border:"2px solid #000000"
                }
const fileStyle={
                fontFamily:"Open Sans",
                fontSize:"1em",
                paddingTop:"0",
                fontVariant:"small-caps",
                margin:"30px",
                height:"auto",
                width:"300px",
                background:"#ffffff",
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
const previewStyle={
                width:"100px",
                height:"100px",
                margin:"30px"
                }
const mainStyle={
                display:"flex",
                flexDirection:"row",
                height:"800px",
                background:"#d4efdf",
                }
  const overall={
                display: "flex",
                flexDirection:"column",
                justifyContent:"space-between",
                }
    return (
      <div style={overall}>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Blog' }]}/>
        <NavBar page="Dashboard"/>
        <main style={mainStyle}>
        <div>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitle} style={titleStyle}/>
          <textarea placeholder="body" value={this.state.body} onChange={this.handleBody} style={bodyStyle}></textarea>
        </div>
        <div>
          <input type="file" onChange={this.handleImage} style={fileStyle}/>
          <img style={previewStyle} src={this.state.preview}/>
          <input type="submit" style={submitStyle} onTouchTap={this.storeArticle}/>
        </div>
        </main>
        <Footer/>
      </div>
    );
  }
}