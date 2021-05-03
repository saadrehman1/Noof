import React, { Component } from "react";
import NavMenu from "./components/NavMenu";
import { Container } from "react-bootstrap";

export class FAQs extends Component {
  render() {
    return (
      <div>
        <NavMenu></NavMenu>
        <Container>
          <h3>FAQs page</h3>
        </Container>
      </div>
    );
  }
}

export default FAQs;
