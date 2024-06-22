// textNode.js

import { useState } from "react";
import { Node } from "../components/Node";
import { Input } from "../components/Input";
import { FormItem } from "../components/FormItem";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    { type: "source", position: Position.Right, id: `${id}-output` },
  ];

  return (
    <Node handles={handles} label="Text">
      <FormItem label="Text:">
        <Input type="text" value={currText} onChange={handleTextChange} />
      </FormItem>
    </Node>
  );
};
