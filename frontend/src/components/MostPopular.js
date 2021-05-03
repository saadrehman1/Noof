import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";

export class MostPopular extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center" style={{ padding: "20px" }}>
          {" "}
          &#9889; Most Popular! &#9889;{" "}
        </h3>
        <Row>
          <Col>
            <Link to="/drawing">
              <Image src={pic1} thumbnail />
            </Link>
          </Col>
          <Col>
            <Link to="/drawing">
              <Image src={pic2} thumbnail />
            </Link>
          </Col>
          <Col>
            <Link to="/drawing">
              <Image src={pic3} thumbnail />
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MostPopular;
