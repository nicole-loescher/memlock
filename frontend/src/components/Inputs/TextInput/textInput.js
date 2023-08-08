const TextInput = ({
  type,
  onChange,
  className,
  label,
  name,
  error,
  postfix,
  overrideValue,
  ...props
}) => {
  const inputProps = {
    type,
    name,
    className: ["text-input", className].join(" "),
    ...props,
  };

  if (label) {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <div className="container-border">
          <input {...inputProps} />
        </div>
        {error && error}
      </div>
    );
  }
  return <input {...inputProps} />;
};
export default TextInput;
