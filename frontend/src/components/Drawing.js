import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import pic5 from "../img/ico.png";
import pic3 from "../img/pic3.jpg";
import pic2 from "../img/pic2.jpg";
import pic1 from "../img/pic1.jpg";
import back from "../img/back.jpg";

export class Drawing extends Component {
  render() {
    return (
      <div
        class="p-3 mb-2 text-white "
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${back})`,
        }}
      >
        <div
          class="container-lg  shadow p-3 mb-5 bg-body rounded bg-light text-dark "
          style={{ marginTop: "30px" }}
        >
          <h1>Title STUF WE CAN NINCOMPOOOP</h1>
          <br></br>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.<br></br>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div class="row">
            <div class="col-sm-4" style={{ margin: "auto" }}>
              <img src={pic3} class="img-thumbnail" alt="..."></img>
            </div>
            <div class="col-sm-4" style={{ margin: "auto" }}>
              <div class="container-sm">
                <h3 style={{ marginTop: "20px" }}>Artist Information</h3>
                <br></br>
                <label>Name : </label>
                <br></br>
                <label>Country : </label>
                <br></br>
                <label>Tags : </label>
                <br></br>
                <label>Social Media : </label>
                <br></br>
                <label>Title of Art : </label>
                <br></br>
              </div>
            </div>
          </div>
          <div class="container">
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-md-4 bg-dark text-white"
              style={{ marginTop: "50px", marginBottom: "50px" }}
            >
              <div class="col  " style={{ borderright: "5px" }}>
                <div class="position-relative">
                  <img
                    src={pic5}
                    class="img-thumbnail "
                    alt="..."
                    style={{
                      width: "50px",
                      marginTop: "20px",
                      marginBottom: "40px",
                      marginLeft: "95px",
                    }}
                  ></img>
                </div>
                <p style={{ textAlign: "center" }}>Currency/Price:</p>
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    fontSize: "50px",
                  }}
                >
                  E 0.01
                </h1>
              </div>
              <div class="col">
                <div class="position-relative">
                  <img
                    src={pic5}
                    class="img-thumbnail "
                    alt="..."
                    style={{
                      width: "50px",
                      marginTop: "20px",
                      marginBottom: "40px",
                      marginLeft: "95px",
                    }}
                  ></img>
                  <p style={{ textAlign: "center" }}>Copies:</p>
                  <h3 style={{ textAlign: "center", fontSize: "50px" }}>1</h3>
                </div>
              </div>
              <div class="col">
                <div class="position-relative">
                  <img
                    src={pic5}
                    class="img-thumbnail "
                    alt="..."
                    style={{
                      width: "50px",
                      marginTop: "20px",
                      marginBottom: "40px",
                      marginLeft: "95px",
                    }}
                  ></img>
                  <p style={{ textAlign: "center" }}>Looking For:</p>
                  <h3 style={{ textAlign: "center", fontSize: "50px" }}>
                    Animator
                  </h3>
                </div>
              </div>
              <div class="col">
                <div class="position-relative">
                  <img
                    src={pic5}
                    class="img-thumbnail "
                    alt="..."
                    style={{
                      width: "50px",
                      marginTop: "20px",
                      marginBottom: "40px",
                      marginLeft: "95px",
                    }}
                  ></img>
                  <p style={{ textAlign: "center" }}>Time-Period:</p>
                  <h3 style={{ textAlign: "center", fontSize: "50px" }}>
                    7- day
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <CardDeck>
              <Card>
                <Card.Header>
                  <a href="#set" className="float-right">
                    <i className="fa fa-ellipsis-h" />
                  </a>
                </Card.Header>
                <Card.Img variant="top" src={pic1} />
                <Card.Body>
                  <Card.Title>Art Name</Card.Title>
                  <Card.Text>
                    ArtistName &nbsp;
                    <br></br>
                    &nbsp;
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                                    <small className="text-muted float-right">
                                        <i className="fa fa-heart-o" /> 38
                </small>
                                </Card.Footer> */}
              </Card>
              <Card>
                <Card.Header>
                  <a href="#set" className="float-right">
                    <i className="fa fa-ellipsis-h" />
                  </a>
                </Card.Header>
                <Card.Img variant="top" src={pic2} />
                <Card.Body>
                  <Card.Title>Art Name</Card.Title>
                  <Card.Text>
                    ArtistName &nbsp;
                    <br></br>
                    {/* <span className="text-muted">Bid</span> &nbsp;
                  <span className="text-primary">0.01 WETH</span> */}
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                                    <small className="text-muted float-right">
                                        <i className="fa fa-heart-o" /> 38
                </small>
                                </Card.Footer> */}
              </Card>
              <Card>
                <Card.Header>
                  <a href="#set" className="float-right">
                    <i className="fa fa-ellipsis-h" />
                  </a>
                </Card.Header>
                <Card.Img variant="top" src={pic3} />
                <Card.Body>
                  <Card.Title>Art Name</Card.Title>
                  <Card.Text>
                    ArtistName &nbsp;
                    <br></br>
                    {/* <span className="text-muted">Bid</span> &nbsp;
                  <span className="text-primary">0.01 WETH</span> */}
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                                    <small className="text-muted float-right">
                                        <i className="fa fa-heart-o" /> 38
                </small>
                                </Card.Footer> */}
              </Card>
              {/* <Card>
                                <Card.Header>
                                    <a href="#set" className="float-right">
                                        <i className="fa fa-ellipsis-h" />
                                    </a>
                                </Card.Header>
                                <Card.Img variant="top" src={pic1} />
                                <Card.Body>
                                    <Card.Title>Mercury</Card.Title>
                                    <Card.Text>
                                        0.06 ETH &nbsp; <span className="text-muted">4 of 5</span>
                                        <br></br>
                                        <span className="text-muted">Bid</span> &nbsp;
                  <span className="text-primary">0.01 WETH</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted float-right">
                                        <i className="fa fa-heart-o" /> 38
                </small>
                                </Card.Footer>
                            </Card> */}
              {/* <Card>
                                <Card.Header>
                                    <a href="#set" className="float-right">
                                        <i className="fa fa-ellipsis-h" />
                                    </a>
                                </Card.Header>
                                <Card.Img variant="top" src={pic2} />
                                <Card.Body>
                                    <Card.Title>Mercury</Card.Title>
                                    <Card.Text>
                                        0.06 ETH &nbsp; <span className="text-muted">4 of 5</span>
                                        <br></br>
                                        <span className="text-muted">Bid</span> &nbsp;
                  <span className="text-primary">0.01 WETH</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted float-right">
                                        <i className="fa fa-heart-o" /> 38
                </small>
                                </Card.Footer>
                            </Card> */}
            </CardDeck>
          </div>
        </div>
      </div>
    );
  }
}

export default Drawing;
