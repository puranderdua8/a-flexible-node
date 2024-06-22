export const Select = ({ children, className, ...otherProps }) => (
  <select
    className={`py-1 border border-purple rounded-md ${className}`}
    {...otherProps}
  >
    {children}
  </select>
);
