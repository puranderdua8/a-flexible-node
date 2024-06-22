export const Input = ({ className, ...otherProps }) => (
  <input
    className={`px-2 py-1 border border-purple rounded-md focus-visible:outline-none ${className}`}
    {...otherProps}
  />
);
