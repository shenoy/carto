import React from "react";

const TimelineItem = ({ el }) => (
  <div className="timeline-item px-5 ">
    <div className="timeline-item-content">
      <div className={el.isComplete?"circle-tick":"circle"}></div>
      <div className="flexend">
      <p className="name"><b>{el.name}</b></p>    <p className= "date">{Date(el.date).slice(0,21)}</p>
      </div>
      <p>{el.description}</p>
    </div>
  </div>
);

export default TimelineItem;
