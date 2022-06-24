import React, { Component } from "react";
import { Route, Switch, HashRouter , BrowserRouter} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    if (settings.isSplash) {
      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route
                path="/praveenaResume"
                exact
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/praveenaResume/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
             
              <Route
                path="/praveenaResume/about"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
            
              <Route
                path="/praveenaResume/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              {/* <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              /> */}
              <Route
                path="/praveenaResume/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="*"
                render={(props) => (
                  <Error404 {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div>
          <BrowserRouter basename="/">
            <Switch>
              <Route
                path="/praveenaResume"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/praveenaResume/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
            
              <Route
                path="/praveenaResume/about"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              
              <Route
                path="/praveenaResume/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              {/* <Route
							path="/splash"
							render={(props) => (
								<Splash
									{...props}
									theme={this.props.theme}
								/>
							)}
						/> */}
              <Route
                path="/praveenaResume/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}
