import { forwardRef, useEffect, useRef } from "react";

const TextInput = forwardRef(
  (
    {
      type,
      onChange,
      className,
      label,
      name,
      error,
      postfix,
      overrideValue,
      ...props
    },
    ref
  ) => {
    function useCombinedRefs(...refs) {
      const targetRef = useRef();

      useEffect(() => {
        refs.forEach((ref) => {
          if (!ref) {
            return;
          }

          if (typeof ref === "function") {
            ref(targetRef.current);
          } else {
            ref.current = targetRef.current;
          }
        });
      }, [refs]);

      return targetRef;
    }

    const innerRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, innerRef);
    const inputProps = {
      type,
      name,
      className: ["text-input", className].join(" "),
      ref: combinedRef,
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
  }
);
export default TextInput;
