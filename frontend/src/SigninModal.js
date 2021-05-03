import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export function SigninModal() {
  return (
    <div className="container">
      <Modal.Header closeButton>
        <Modal.Title>Sign In/ Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Link to="/profile">
            <Button
              className="text-center"
              variant="dark"
              type="submit"
              style={{ width: "100%" }}
            >
              SignIn
            </Button>
          </Link>
        </Form>
      </Modal.Body>
    </div>
  );
}

export default SigninModal;
