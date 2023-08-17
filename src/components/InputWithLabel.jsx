import { useEffect, useRef } from 'react';

export default function InputWithLabel({
  id,
  value,
  onInputChange,
  type = 'text',
  children,
  isFocused,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children} </label>
      {/* controlled component */}
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        type={type}
        id={id}
      />
    </>
  );
}
