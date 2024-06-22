import { Node } from "../components/Node";
import { Input } from "../components/Input";
import { Position } from "reactflow";
export const RadioNode = ({ id, data }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: `${100 / 3}%` },
    },
  ];
  return (
    <Node label="Radio group" handles={handles}>
      <fieldset>
        <legend>Please select your preferred contact method:</legend>
        <div className="flex gap-2">
          <Input
            type="radio"
            id="contactChoice1"
            name="contact"
            value="email"
          />
          <label for="contactChoice1">Email</label>

          <Input
            type="radio"
            id="contactChoice2"
            name="contact"
            value="phone"
          />
          <label for="contactChoice2">Phone</label>

          <Input type="radio" id="contactChoice3" name="contact" value="mail" />
          <label for="contactChoice3">Mail</label>
        </div>
      </fieldset>
    </Node>
  );
};
