/**
*
* Footer
*
*/

import React from 'react';
import Notification from "material-ui/svg-icons/notification/live-tv";
import ActionHome from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
class Footer extends React.PureComponent {

  render() {
    const rowStyle2={
                    width:"100%",
                    height:"100px",
                    background:"#000000",
                    backgroundSize:"cover",
                    borderTop:"3px dotted #ffffff"
                    }
  const titleStyle2={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:".5em",
                    color:"#ffffff",
                    paddiingRight:"70px"
                    }
    return (
      <div style={rowStyle2}>
        <IconButton tooltip="SVG Icon">
          <Notification color="#ffffff"/>
        </IconButton>
      <div style={titleStyle2}> Subscribe <br/> to our <br/> YouTube </div>
      </div>
    );
  }
}

export default Footer;
