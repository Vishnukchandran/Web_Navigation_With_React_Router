import React from "react";
import Card from "./Card";

//Datascience page
const DataScience = ({ data }) => {
  const dataScience = data.filter((item) => item.head === "Data Science"); // filtering the data science page

  //Grouping the cards into three
  const triplets = [];
  for (let i = 0; i < dataScience.length; i += 3) {
    triplets.push(dataScience.slice(i, i + 3));
  }

  return (
    <div className="container">
      {triplets.map((triplet, index) => (
        <div className="row justify-content-center" key={index}>
          {triplet.map((item, innerIndex) => (
            <div className="col-lg-4 mt-5" key={innerIndex}>
              <Card item={item} index={index * 3 + innerIndex} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataScience;
