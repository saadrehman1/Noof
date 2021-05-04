import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class ChatButton extends Component {
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
        <button
          type="button"
          class="btn btn-dark "
          onClick={() => {
            this.handleModal();
          }}
          style={{ margin: "auto" }}
        >
          Chat
        </button>
        <Modal
          id="two"
          show={this.state.show}
          onHide={() => this.handleModal()}
        >
          <Modal.Body>
            <form id="02">
              <h1>Chat</h1>

              <button type="submit" className="btn btn-primary btn-block">
                Send
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

export default ChatButton;
