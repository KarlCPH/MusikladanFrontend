import React from "react";
import { Switch, Route, Link } from "react-router-dom"
import "../custom.scss"
import background from "../images/angryimg.png"
import logo from "../images/object1908573876.png"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"


import About from "./about";
import AddText from "./addtext";
import Contact from "./contact";
import Forms from "./forms";
import Home from "./home";
import Login from "./login";
import Schedule from "./schedule";
import Footer from "./footer"




function NavBar() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="secondary">
        <Navbar.Brand  href="#home">
          <a href="/home" className="navbar-brand text-dark">
            <img width="70px" height="auto" className="img-responsive" src={logo} alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">Om oss</Nav.Link>
            <Nav.Link href="/contact">Kontakta oss</Nav.Link>
            <Nav.Link href="/forms">Blanketter</Nav.Link>
            <Nav.Link href="/schedule">Evenemang</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container fluid mt-3" >
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/forms" component={Forms} />
          <Route path="/contact" component={Contact} />
          <Route path="/schedule" component={Schedule} />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Navbar;