import { useState } from "react";
import { Node } from "./Node";
import { FormItem } from "./FormItem";
import { Input } from "./Input";
import { Select } from "./Select";

export const NodeWithType = ({
  defaultName,
  defaultType,
  onChange,
  types,
  ...nodeProps
}) => {
  const [name, setName] = useState(defaultName || "");
  const [type, setType] = useState(defaultType || "");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onChange({ name: newName, type });
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    onChange({ name, type: newType });
  };

  return (
    <Node {...nodeProps}>
      <FormItem label="Name:">
        <Input type="text" value={name} onChange={handleNameChange} />
      </FormItem>
      <FormItem label="Type:">
        <Select value={type} onChange={handleTypeChange}>
          {types.map((type) => (
            <option value={type.value}>{type.label}</option>
          ))}
        </Select>
      </FormItem>
    </Node>
  );
};
