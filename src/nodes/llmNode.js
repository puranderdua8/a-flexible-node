// llmNode.js
import { Node } from "../components/Node";
import { Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: `${200 / 3}%` },
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-response`,
    },
  ];
  return (
    <Node label="LLM" handles={handles}>
      <span>This is a LLM.</span>
    </Node>
  );
};
