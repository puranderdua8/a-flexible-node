export const FormItem = ({ label, children }) => {
  return <label className="flex gap-2 items-center">
    {label}
    {children}
  </label>;
};
