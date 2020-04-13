import React, {useState} from "react";
import { Form } from 'react-bootstrap';

const InputText = ({
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
  label,
  multiple = false,
  value
}) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = e => {
    hidden === false ? setHidden(true) : setHidden(false);
  }

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={hidden ? "text" : type} placeholder={placeholder} name={name} value={value} onChange={onChange} required/>
      {name==="password" && <Form.Check type="checkbox" label={hidden ? "Hide password" : "Show password"} onClick={handleClick} />}
    </Form.Group>
  );
};

export default InputText;
