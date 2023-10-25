import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.src} className="card--image" />
      <div className="card--content">
        <div className="card--content--rating">
          <img src="/assets/images/star.svg" alt="" className="star-icon" />
          <p>
            &nbsp;{props.rating}&nbsp;
            <span>
              ({props.reviewCount}).{props.location}
            </span>
          </p>
        </div>
        <p className="card--content--text">{props.title}</p>
        <p className="card--content--price">
          <span>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
