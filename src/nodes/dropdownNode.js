// llmNode.js
import { useState } from "react";
import { Node } from "../components/Node";
import { FormItem } from "../components/FormItem";
import { Select } from "../components/Select";
import { Position } from "reactflow";

export const DropdownNode = ({ id, data }) => {
  const [value, setValue] = useState("");

  const options = [
    { label: "Option 1", value: "optopn_1" },
    { label: "Option 2", value: "option_2" },
  ];

  const handleChange = (e) => setValue(e.target.value);

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
  ];
  return (
    <Node label="Dropdown" handles={handles}>
      <FormItem label="Select one:">
        <Select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
      </FormItem>
    </Node>
  );
};
