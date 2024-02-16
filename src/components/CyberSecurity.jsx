import React from "react";
import Card from "./Card";


//Cybersecurity page
const CyberSecurity = ({ data }) => {
  const cyber = data.filter((item) => item.head === "Cyber Security"); // filtering the cybersecurity page

  //Grouping the cards into three
  const triplets = [];
  for (let i = 0; i < cyber.length; i += 3) {
    triplets.push(cyber.slice(i, i + 3));
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

export default CyberSecurity;
