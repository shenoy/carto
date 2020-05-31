import React from "react";
import { data } from "./timelineData";
import TimelineItem from "./TimelineItem";

const TimeLine = () => (
  <div className="timeline">
    <div className="flex mt-5">
      <h1>{data.name}:</h1>
      <div
        className={
          data.tasks[data.tasks.length - 1].isComplete
            ? "complete mx-2 px-3"
            : "incomplete mx-2 px-3"
        }
      >COMPLETED</div>
    </div>
    <div className="scroll">
    {data.tasks.map((el, index) => (
      <TimelineItem el={el} key={index} />
    ))}
    </div>

      <h2>
        Progress:
      ({Math.round(
        (+data.tasks.filter((x) => x.isComplete).length / data.tasks.length) *
        100
        )}%)
      
    </h2>
      <progress className="progress mb-5" value={Math.round(
        (+data.tasks.filter((x) => x.isComplete).length / data.tasks.length) *
        100
      )} max="100" />
  </div>
);


export default TimeLine;
