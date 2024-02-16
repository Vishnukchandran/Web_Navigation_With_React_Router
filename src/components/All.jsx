import React from "react";
import Card from "./Card";

//Home page
const All = ({ data }) => {
  return (
    <div className="container text-center">
      <div className="row row-cols-md-2 row-cols-lg-3">
        {data.map((item, index) => (
          <div className="g-3 d-flex" style={{ padding: "2rem" }}>
            <div className="d-flex flex-column w-100 h-100">
              <Card item={item} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
