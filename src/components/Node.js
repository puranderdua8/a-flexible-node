import { Handle } from "reactflow";

export const Node = ({
  label,
  handles,
  children,
  className,
  ...htmlDivProps
}) => {
  return (
    <div
      className={`flex flex-col gap-4 p-4 bg-white border border-purple max-w-[400px] rounded-md ${className}`}
      {...htmlDivProps}
    >
      <p>{label}</p>
      {children}
      {handles.map((handle) => (
        <Handle key={handle.id} {...handle} />
      ))}
    </div>
  );
};
