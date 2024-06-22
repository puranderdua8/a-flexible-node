// outputNode.js
import { NodeWithType } from "../components/NodeWithType";
import { Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const defaultName = data?.inputName || id.replace("customOutput-", "output_");
  const defaultType = data.inputType || "Text";

  return (
    <NodeWithType
      label="Output"
      handles={[{ type: "target", position: Position.Left, id: `${id}-value` }]}
      defaultName={defaultName}
      defaultType={defaultType}
      types={[
        { label: "Image", value: "File" },
        { label: "Text", value: "Text" },
      ]}
    />
  );
};
