import React from 'react';
import { Nav } from "react-bootstrap";


const ExploreTitle = () => {
    return (
      <div
        className="container"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Nav fill variant="pills" defaultActiveKey="/home" className="navpill">
          <Nav.Item>
            <h3>Explore &#9889; &nbsp;</h3>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#art"> &#127752; Art</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#photos"> &#128247; Photography</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#games"> &#127918; Games</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#meta"> &#128126; Metaverses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#music"> &#127925; Music</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#domain"> &#128394; Domains</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#defi"> &#128176; Defi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#meme"> &#129313; Memes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#filter"> &#127898; Filter &amp; Sort</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
}
 
export default ExploreTitle;