import React from "react";

//card body
const Card = ({ item, index }) => {
  return (
    <div
      className="card shadow"
      style={{ width: "100%", border: "none", height: "100%" }}
    >
      <img
        src={item.image}
        className="card-img-top"
        alt="..."
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        <div>
          <a
            href={item.link}
            className="card-title"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {item.title}
          </a>
          <p className="card-text">{item.content}</p>
        </div>
        <p className="card-text">
          <small className="text-body-secondary">{item.time}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
