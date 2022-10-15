import React from "react";
import { EmailInput, PwInput } from "./styled"

type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
  classname: string;
};

function Input({ onChange, name, placeholder, value = "", classname }: Props) {

  if (classname === 'email-input') {
    return (
      <EmailInput
        onChange={event => onChange(event.target.value)}
        name={name}
        placeholder={placeholder}
        value={value} />
    )
  } 
  else if (classname === 'pw-input') {
    return (
      <PwInput
        onChange={event => onChange(event.target.value)}
        name={name}
        placeholder={placeholder}
        value={value} />)
  }
  else {
    return (
      <input
        onChange={event => onChange(event.target.value)}
        name={name}
        placeholder={placeholder}
        value={value}
      />)
  }
}

export default Input;