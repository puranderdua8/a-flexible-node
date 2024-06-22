// timerNode.js
import { useState, useEffect } from "react";
import { Node } from "../components/Node";
import { Position } from "reactflow";

export const TimerNode = ({ id, data }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
  ];
  return (
    <Node label="Timer" handles={handles}>
      <p>Seconds passed: {time}</p>
    </Node>
  );
};
