import React, {useState} from "react";
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap';

const InputText = ({
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
  label,
  multiple,
  disabled,
  value
}) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = e => {
    hidden === false ? setHidden(true) : setHidden(false);
  }

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={hidden ? "text" : type} placeholder={placeholder} name={name} value={value} onChange={onChange} disabled={disabled} required/>
      {name==="password" && <Form.Check type="checkbox" label={hidden ? "Hide password" : "Show password"} onClick={handleClick} />}
    </Form.Group>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
}

InputText.defaultProps = {
  labelText: '',
  errorMessage: '',
  placeholder: '',
  className: '',
  disabled: false,
  multiple: false,
}

export default InputText;
