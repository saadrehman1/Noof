import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import pro1 from "../img/pro1.jpg";


const TopSellBuy = (props) => {
  return (
    <div>
      <div className="col-sm">
        <div className="card mb-3" style={{ maxWidth: 300 }}>
          <div className="container">
            <div className="row g-0">
              <div className="col-md-4" style={{ marginTop: "12px" }}>
                <Image src={pro1} roundedCircle />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{props.item.name}</h6>
                  <p className="card-text text-muted">{props.item.eth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default TopSellBuy;
