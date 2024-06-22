// textNode.js

import { useEffect, useState, useRef } from "react";

import { Node } from "../components/Node";
import { Textarea } from "../components/Textarea";
import { FormItem } from "../components/FormItem";
import { Position, useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  // Default right handle for the text node
  const DEFAULT_HANDLE = {
    type: "source",
    position: Position.Right,
    id: `${id}-output`,
  };

  const textAreaRef = useRef(null);

  const [text, setText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([DEFAULT_HANDLE]);

  // Hook givig a function to trigger the updating of node on addition of handles
  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => setText(e.target.value);

  // Helper to extract variables from the text in the input
  const getVariables = (value) => {
    // Regex to match the pattern {{variable}} in string
    const regex = /{{([^}]+)}}/g;

    // Find all matches and take the word from it to use further
    const matches = value.matchAll(regex);
    return [...matches].map((match) => match[1]);
  };

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      // Set height as 0 to start with
      textAreaRef.current.style.height = "0px";

      // Find current scroll height and set it as the new height
      const { scrollHeight } = textAreaRef.current;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  };

  useEffect(() => {
    // Get variables from text
    const variables = getVariables(text);

    // Create new handles and set them
    const newHandles = variables.map((variable, index) => {
      return {
        type: "target",
        position: Position.Left,
        id: `${id}-${variable}`,
        style: { top: `${(100 / (variables.length + 1)) * (index + 1)}%` }, // calculate position of handles based on number of variables
      };
    });
    setHandles([DEFAULT_HANDLE, ...newHandles]);

    // Update note internals since we are dynamically adding/removeing nodes
    // Refer https://reactflow.dev/api-reference/components/handle#dynamic-handles
    updateNodeInternals(id);

    // Dynamically setting textarea height based on the current content
    resizeTextArea();
  }, [text]);

  return (
    <Node handles={handles} label="Text" className="overflow-auto">
      <FormItem label="Text:">
        <Textarea ref={textAreaRef} value={text} onChange={handleTextChange} />
      </FormItem>
    </Node>
  );
};
