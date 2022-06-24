import React, { Component  } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import pic from "../../assests/images/mypic.jpg";
import contacts from "../../assests/images/contact.gif"
const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;
const email = contactPageData.email;

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img src={pic} alt="mypic" />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {email["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {email["subtitle"]}
                </p>
              </div>
              <div className="contact-heading-img-div">
                {/* <form id="contact" action="" method="post">
                  <fieldset>
                    <input
                      placeholder="Your name"
                      type="text"
                      tabindex="1"
                      required
                      
                      name="name"
                      value=""
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Your Email Address"
                      type="email"
                      tabindex="2"
                      name="email"
                      required
                      value=""
                      
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Your Phone Number"
                      type="tel"
                      name="phonenumber"
                      tabindex="3"
                      required
                      
                      value=""
                    />
                  </fieldset>

                  <fieldset>
                    <textarea
                      placeholder="Type your Message Here...."
                      tabindex="5"
                      required
                      name="message"
                      
                      value=""
                    ></textarea>
                  </fieldset>
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form> */}
                <img src={contacts} alt="conatct" />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
