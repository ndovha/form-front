import React from 'react';
import { WrapperInput, InputFild, Error } from './style';

export default function Input({
  className,
  placeholder,
  type = 'text',
  value,
  error,
  onChange,
}) {
  return (
    <WrapperInput>
      <InputFild
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <Error>{error}</Error>}
    </WrapperInput>
  );
}

  
