import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { Button } from "react-bootstrap";
import pic5 from "../img/back.jpg";
import twi from "../img/twi.jpg";
import Profilecircle from "./Profilecircle";
import "./profile.css";

export class Profile extends Component {
  render() {
    return (
      <div className="bg-light">
        <NavMenu></NavMenu>
        <div
          className="container-lg text-dark"
          style={{ position: "relative" }}
        >
          <img
            src={pic5}
            style={{
              width: "97.2%",
              height: "430px",
              position: "absolute",
            }}
            alt=""
            className="banner"
          ></img>
          <div
            className="coloumn container-lg  shadow p-3 mb-5"
            style={{ backgroundColor: "lightgray" }}
          >
            <div className="row"></div>
            <div className="row">
              <h2
                className=" w-100 p-3 text-dark"
                style={{
                  textAlign: "center",
                  marginTop: "40PX",
                  position: "absolute",
                }}
              >
                USER PROFILE
              </h2>
            </div>
            <div className="row">
              <div
                className="container-sm  shadow p-3 mb-5 bg-body rounded bg-light text-dark "
                style={{
                  width: "530px",
                  marginTop: "100PX",
                }}
              ></div>
            </div>
            <div className="row">
              <div className="mx-auto" style={{ width: "370px" }}>
                <Profilecircle />
              </div>
            </div>
            <br></br>

            <div className="row">
              <div className="mx-auto" style={{ width: "80px" }}>
                <img
                  src={twi}
                  className="rounded-circle "
                  alt="..."
                  style={{
                    width: "50px",
                    height: "50px",
                    marginLeft: "ml-6",
                    marginTop: "10px",
                    position: "absolute",
                  }}
                ></img>
              </div>
            </div>

            <div className="row">
              <div
                className="container shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark"
                style={{ width: "600px", marginTop: "35PX" }}
              >
                <br></br>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
                <br></br>
                <br></br>
                <div className="text-center">
                  <Link to="/contract">
                    <Button variant="dark">Collaborate/ Sponsor</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <h2
                className=" w-100 p-3 text-dark "
                style={{ textAlign: "center" }}
              >
                I'm A Professional Lady
              </h2>
            </div>
            <div className="row w-100 p-3 ">
              <div className="col">
                <div>
                  <h4 className="text-center">The Skills</h4>
                  <h4 className="text-center">I Have</h4>
                  <p class=" w-100 p-3 text-dark " style={{}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="container-sm">
                  <div>
                    <h4 classNameName="text-center">The Skills</h4>
                    <h4 className="text-center">
                      I Am Hoping To Find In Collaborators
                    </h4>
                    <p className=" w-100 p-3 text-dark ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
