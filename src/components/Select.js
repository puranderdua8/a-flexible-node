export const Select = ({ children, className, ...otherProps }) => (
  <select
    className={`py-1 border border-purple rounded-md focus-visible:outline-none ${className}`}
    {...otherProps}
  >
    {children}
  </select>
);
