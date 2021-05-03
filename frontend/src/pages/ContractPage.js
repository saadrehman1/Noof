import React from "react";
import NavMenu from "../components/NavMenu";
import { Container } from "react-bootstrap";

function ContractPage(props) {
  return (
    <div>
      <NavMenu></NavMenu>
      <Container>
        <h3>Contract page</h3>
      </Container>
    </div>
  );
}

export default ContractPage;
