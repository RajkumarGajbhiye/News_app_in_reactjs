import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary res"
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              with="50px"
              height="50px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18SbCS6d6HNqIqVqC7gqKN76DsNFGBdUCtQ&usqp=CAU"
              roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex gap-3" color="faded" light>
              <Link to="/">Home</Link>
              <Link to="/general">General</Link>
              <Link to="/entertainment">Entertainment</Link>
              <Link to="/health">Health</Link>
              <Link to="/science">Science</Link>
              <Link to="/sports">Sports</Link>
              <Link to="/technology">Technology</Link>
              <Link to="business">Business</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
