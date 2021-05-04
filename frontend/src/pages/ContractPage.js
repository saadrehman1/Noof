import React, { Component } from "react";
import NavMenu from "../components/NavMenu";

import logo from "../img/logo.jpg";
import Pic1 from "../img/pic2.jpg";
import Pic2 from "../img/pic3.jpg";
import { Button, Modal, Container } from "react-bootstrap";
import Slider from "../components/Slider";
import ChatButton from "../components/ChatButton";

class ContractPage extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <NavMenu></NavMenu>
        <Container>
          <div
            class="coloumn container-lg  shadow mb-5"
            style={{
              backgroundColor: "lightgray",
              marginTop: "3%",
              height: "120%",
            }}
          >
            <div class="container p-5">
              <div class="row" style={{ margin: "auto" }}>
                <div class="col-sm">
                  <img src={Pic1} class="img-thumbnail  my-5" alt="..."></img>
                </div>
                <div class="col-sm my-5">
                  <div class="row">
                    <button
                      type="button"
                      class="btn btn-dark "
                      onClick={() => {
                        this.handleModal();
                      }}
                      style={{ margin: "auto" }}
                    >
                      Contract
                    </button>
                  </div>
                  <div class="row my-5">
                    <div style={{ margin: "auto" }}>
                      <Slider />
                    </div>
                  </div>
                  <div class="row my-5">
                    <div style={{ margin: "auto" }}>
                      <ChatButton />
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <img src={Pic2} class="img-thumbnail  my-5" alt="..."></img>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Modal
          id="one"
          show={this.state.show}
          onHide={() => this.handleModal()}
        >
          <Modal.Body>
            <form id="01">
              <h1>Message</h1>
              <br></br>
              <p>
                Information & Conversation sould be confidential as per our
                terms and conditions
              </p>

              <br></br>
              <br></br>

              <button type="submit" className="btn btn-primary btn-block">
                Accept
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              className="btn btn-dark btn-block"
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ContractPage;
