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
export default class Blog extends React.PureComponent {
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
  render() {
const textStyle={
                fontFamily:"Open Sans",
                fontSize:"1.5em",
                paddingTop:"0",
                fontVariant:"small-caps",
                margin:"30px"
                }

  const preview={
                width:"100px",
                height:"100px"
                }
const mainStyle={
                display:"flex",
                flexDirection:"column"
                }
    return (
      <div>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>
        <NavBar page="Blog"/>
        <main style={mainStyle}>
        <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitle}
          input style={textStyle}/>
        <input type="text" placeholder="body" value={this.state.body} onChange={this.handleBody}
          input style={textStyle}/>
        <input type="file" onChange={this.handleImage}  input style={textStyle}/>
        <img style={preview} src={this.state.preview}/>
        </main>
        <Footer/>
      </div>
    );
  }
}
