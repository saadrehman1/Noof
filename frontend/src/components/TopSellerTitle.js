import React from 'react';

const TopSellerTitle = () => {
    return (
      <h3 style={{ padding: "30px" }}>
        {" "}
        &#128176; Top{" "}
        <span>
          <select
            className="form-select text-primary"
            style={{ border: "0px", outline: "0px" }}
          >
            <option>sellers</option>
            <option>buyers</option>
          </select>
        </span>{" "}
        in{" "}
        <span>
          <select
            className="form-select text-primary"
            style={{ border: "0px", outline: "0px" }}
          >
            <option>1 day</option>
            <option>2 day</option>
          </select>
        </span>
      </h3>
    );
}
 
export default TopSellerTitle;