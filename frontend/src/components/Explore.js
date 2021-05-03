import React, { Component } from "react";
import { Nav, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";

const Explore = (props) => {

  const pol = "../img/pic3.jpg";
  return (
    <div className="col-sm-3">
      <CardDeck>
        <Card>
          <Card.Header>
            <a href="#set" className="float-right">
              <i className="fa fa-ellipsis-h" />
            </a>
          </Card.Header>
          <Link to="/drawing">
            <Card.Img variant="top" src={pic1} />
          </Link>
          <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>
              {props.item.eth} &nbsp; <span className="text-muted">4 of 5</span>
              <br></br>
              <span className="text-muted">Bid</span> &nbsp;
              <span className="text-primary">{props.item.bid}</span>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted float-right">
              <i className="fa fa-heart-o" /> 38
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
 
export default Explore;

