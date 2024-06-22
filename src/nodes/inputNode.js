// inputNode.js
import { NodeWithType } from "../components/NodeWithType";
import { Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const defaultName = data?.inputName || id.replace("customInput-", "input_");
  const defaultType = data.inputType || "Text";

  return (
    <NodeWithType
      label="Input"
      handles={[
        { type: "source", position: Position.Right, id: `${id}-value` },
      ]}
      defaultName={defaultName}
      defaultType={defaultType}
      types={[
        { label: "Image", value: "File" },
        { label: "Text", value: "Text" },
      ]}
    />
  );
};
