import React from "react";
import { Form, Col } from 'react-bootstrap';

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
  return (
    <>
        <Form.Group as={Col}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} required/>
        </Form.Group>
      {/* {error && <div style={Style.error}>{error}</div>} */}
    </>
  );
};

export default InputText;
