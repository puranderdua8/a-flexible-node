// llmNode.js
import { Node } from "../components/Node";
import { Position } from "reactflow";

export const ImageNode = ({ id, data }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
  ];
  return (
    <Node label="Image" handles={handles}>
      <img src="https://picsum.photos/120" />
    </Node>
  );
};
