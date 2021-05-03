import React, { useState } from "react";
import {
  Modal,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import SigninModal from "../SigninModal";
import SignupStepper from "../SignupStepper";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.jpg";

export default function NavMenu() {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignin = () => setShowSignin(false);
  const handleShowSignin = () => setShowSignin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Image src={logo} width="35px" height="35px"></Image>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/marketplace" className="nav-link">
                  Marketplace
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faqs" className="nav-link">
                  FAQ's
                </NavLink>
              </li>
              <Nav.Link onClick={handleShowSignin}>Sign in/ Sign up</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ maxWidth: "340px" }}
              />
              &nbsp;
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Signin model */}
      <Modal show={showSignin} onHide={handleCloseSignin}>
        <SigninModal></SigninModal>
        <Modal.Footer>
          <p className="text-mute">Don't have an account? </p>
          <Button
            variant="outline-dark"
            onClick={() => {
              handleShowSignup();
              handleCloseSignin();
            }}
          >
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Signup model */}
      <Modal show={showSignup} onHide={handleCloseSignup}>
        <div className="container">
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupStepper></SignupStepper>
          </Modal.Body>
          <Modal.Footer>
            <p className="text-mute">Already have an account? </p>
            <Button
              variant="outline-dark"
              onClick={() => {
                handleShowSignin();
                handleCloseSignup();
              }}
            >
              Sign In
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
