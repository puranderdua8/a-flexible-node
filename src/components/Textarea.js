import { forwardRef } from "react";

export const Textarea = forwardRef(function MyInput(props, ref) {
  const { className, ...otherProps } = props;
  return (
    <textarea
      ref={ref}
      className={`px-2 py-1 border border-purple rounded-md focus-visible:outline-none ${className}`}
      {...otherProps}
    />
  );
});
