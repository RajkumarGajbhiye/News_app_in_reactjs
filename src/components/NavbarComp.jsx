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
            <Nav className="ms-auto d-flex gap-3" >
              <Link to="/" className="link">Home</Link>
              <Link to="/general" className="link">General</Link>
              <Link to="/entertainment" className="link">Entertainment</Link>
              <Link to="/health" className="link">Health</Link>
              <Link to="/science" className="link">Science</Link>
              <Link to="/sports" className="link">Sports</Link>
              <Link to="/technology" className="link">Technology</Link>
              <Link to="business" className="link">Business</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
