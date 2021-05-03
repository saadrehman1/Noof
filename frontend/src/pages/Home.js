import React, { Component, useEffect } from "react";
import NavMenu from "../components/NavMenu";
import MostPopular from "../components/MostPopular";
import TopSellBuy from "../components/TopSellBuy";
import Explore from "../components/Explore";
import TopSellerTitle from "../components/TopSellerTitle";
import { Row } from "react-bootstrap";
import ExploreTitle from "../components/ExploreTitle";
import topSellCard from "../data/topsellData"
import exploreCard from "../data/exploreData"

const Home = (props) => {
  useEffect(() => {
    console.log(topSellCard);
  });
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <NavMenu></NavMenu>
      <MostPopular></MostPopular>
      <div className="container">
        <TopSellerTitle />
        <div className="row" style={{ margin: "auto" }}>
          {topSellCard.map((item) => {
            return <TopSellBuy item={item} key={item.id} />;
          })}
        </div>
        <ExploreTitle />
        <div className="row" style={{ margin: "auto" }}>
          {exploreCard.map((item) => {
            return <Explore item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="mb-5">

      </div>
    </div>
  );
};

export default Home;
