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
                    height:"80px",
                    background:"#000000",
                    backgroundSize:"cover",
                    borderTop:"3px solid #ffffff",
                    textAlign:"center",
                    cursor:"pointer"
                    }
  const titleStyle2={
                    fontFamily:"Open Sans",
                    fontStyle:"normal",
                    fontSize:".5em",
                    fontVariant:"small-caps",
                    color:"#ffffff",
                    }
    return (
      <div style={rowStyle2}>
        <IconButton tooltip="Subscribe">
          <Notification color="#ffffff"/>
        </IconButton>
        <div style={titleStyle2}> Subscribe to our YouTube </div>
      </div>
    );
  }
}

export default Footer;
