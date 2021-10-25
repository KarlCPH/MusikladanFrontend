import React, {useState, Fragment} from "react";
import { BrowserRouter as Router, NavLink, Route, Switch, Link } from "react-router-dom";
import "./custom.scss"
import background from "./images/angryimg.png"
import logo from "./images/object1908573876.png"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./App.css"
import CookieConsent from "react-cookie-consent"


import About from "./components/about";
import AddText from "./components/addtext";
import Contact from "./components/contact";
import Forms from "./components/forms";
import Home from "./components/home";
import Login from "./components/login";
import Schedule from "./components/schedule";
import Navbarz from "./components/navbar";
import Footer from "./components/footer"
import facebookImg from "./images/Facebook.PNG"
import Facebook from "./components/facebook";
import CarouselPage from "./components/carousel"
import ReadOnlyRow from "./components/readOnlyRows";
import EditableRow from "./components/editableRows";
import AdminContact from "./components/adminContact"

const styles = {
    
  cardImage: {
      objectFit: 'cover',
      
      width: '100vw',
      height: '30vh'

  },

  cardColor: {
      backgroundColor: "rgba(245, 245, 245, 0.4)"

  },
  navPos: {
    position: 'relative',
    left: '-15px'
  }
}



//Welcome to the jungle
const Header = () => {
  return (
    <div>
      

      <Navbar class="navbar transparent navbar-inverse navbar-fixed-top-right" collapseOnSelect expand="lg">
        <nav>
          <Link to ="/home">
          <a className="navbar-brand">
            <img src={logo} className="logo" alt={"logo"} />
          </a>
          </Link>
        </nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width:"100%"}}>
            <Nav.Link style={styles.navPos} href="/about">Om oss</Nav.Link>
            <Nav.Link style={styles.navPos} href="/contact">Kontakta oss</Nav.Link>
            
            
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <CarouselPage />
      <CookieConsent buttonText="Jag Förstår" debug={true}> Denna hemsida använder cookies </CookieConsent>

    </div>
  )
};


const Welcome = () => {
  return (
    <div id="info" bg="secondary" className={"container-fluid"}>
      <div className={"bg-marge shadow-lg mt-5 row align-items-center"}>
        <img src={logo} style={{ width: "5%" }} alt={""} />

      </div>
    </div>
  );
};






function App() {
  
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div className="backgroundd">
      <Router>
        <Header />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/forms" component={Forms} />
          <Route path="/contact" component={Contact} />
          <Route path="/schedule" component={Schedule} />
          <Route path="readOnlyRows" component={ReadOnlyRow} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;