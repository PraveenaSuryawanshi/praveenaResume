import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      
      </>
      // <div className="main" id="certs">
      //   <div className="certs-header-div">
      //     <Fade bottom duration={2000} distance="20px">
      //       <h1 className="certs-header" style={{ color: theme.text }}>
      //         Experience
      //       </h1>
      //     </Fade>
      //   </div>
      //   <div className="certs-body-div">
      //     {certifications.certifications.map((cert) => {
      //       return <CertificationCard certificate={cert} theme={theme} />;
      //     })}
      //   </div>
      // </div>
    );
  }
}

export default Certifications;
