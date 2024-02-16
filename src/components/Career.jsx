import React from "react";
import Card from "./Card";

// career page
const Career = ({data}) => {
  const jobs = data.filter((item) => item.head === "Career"); // filtering the career page
  
  //Grouping the cards into three
  const triplets = [];
  for (let i = 0; i < jobs.length; i += 3) {
    triplets.push(jobs.slice(i, i + 3));
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

export default Career;


