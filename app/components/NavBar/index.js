/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";
import IconButton from "material-ui/IconButton";
import Responsive from "react-responsive";
import MenuIcon from "material-ui/svg-icons/navigation/menu";
class NavBar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }

  showMenu = () => {

          const nav={
                    display:"flex",
                    flexDirection:"column",
                    alignSelf:'center'
                    }

    const linkStyle={
                     textDecoration:"none",
                     color:"#000000",
                     fontSize:"2em",
                     fontVariant:"small-caps",
                     textAlign:"center"
                    };

    if(this.state.menuOpen == true)
    {
      return(
        <nav style={nav}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link style={linkStyle} to= "/About"> About </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
    }
  }
  activeMenu = () => {
    const navStyle={
                     margin:"0",
                     padding:"10px",
                     width:"100%",
                     fontFamily:"Open Sans",
                     borderTop:"2px solid #000000",
                     borderBottom:"1px solid #000000",
                     textAlign:"center",
                     }
    const linkStyle={
                     textDecoration:"none",
                     color:"#000000",
                     fontSize:"1.5em",
                     fontVariant:"small-caps",
                     textAlign:"center"
                     }
    const activeStyle={
                      color:"#000000",
                      fontSize:"2em",
                      fontVariant:"small-caps",
                      textAlign:"center",
                      fontWeight:"bold",
                      textDecoration:"none"

  }
    if(this.props.page == "Home"){
      return(
        <nav style={navStyle}>
          <Link style={activeStyle} to= "/"> Home </Link>
          <Link style={linkStyle} to= "/About"> About </Link>
          <Link style={linkStyle} to= "/Posts"> Posts </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
    }
    else if (this.props.page == "About") {
     return(
       <nav style={navStyle}>
         <Link style={linkStyle} to= "/"> Home </Link>
         <Link style={activeStyle} to= "/About"> About </Link>
         <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
       </nav>
     )
    }
    else if (this.props.page == "Dashboard") {
     return(
       <nav style={navStyle}>
         <Link style={linkStyle} to= "/"> Home </Link>
         <Link style={linkStyle} to= "/About"> About </Link>
         <Link style={activeStyle} to= "/Dashboard"> Dashboard </Link>
       </nav>
     )
    }
    else {
      return(
        <nav style={navStyle}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link style={linkStyle} to= "/About"> About </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
    }
  }

  render() {
  const navStyle={
                   margin:"0",
                   padding:"10px",
                   width:"100%",
                   fontFamily:"Open Sans",
                   borderTop:"2px solid #000000",
                   borderBottom:"1px solid #000000",
                   textAlign:"center",
                   }

    return (
    <header>
      <Responsive minDeviceWidth={1024}>
        {this.activeMenu()}
      </Responsive>

      <Responsive maxDeviceWidth={1023}>
        <nav style={navStyle}>
          <IconButton onTouchTap={this.handleMenu}> <MenuIcon/> </IconButton>
        </nav>
        {this.showMenu()}
      </Responsive>
    </header>
    );
  }
}

export default NavBar;
