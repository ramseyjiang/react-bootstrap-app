import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskElementEdit = ({task, elementName}) => {
  const [mode, setMode] = useState("list");
  const [elementValue, setElementValue] = useState(task[elementName]);

  const handleChange = e => {
      setElementValue(e.target.value);
  };

  const handleSave = () => {
      task[elementName] = elementValue;
      setMode("list");
  }

  const handleCancel = () => {
      setElementValue(task[elementName]);
      setMode("list");
  }

  return (
    <>
      {mode === "list"
      ? <>
          {task[elementName]} {' '} 
          <Button variant="warning" size="sm" onClick={() => setMode("edit")}>Edit</Button>
      </> : <>
          <Form.Control name={elementName} value={elementValue} onChange={handleChange} required/> {' '}<br></br>
          <Button variant="primary" size="sm" onClick={handleSave}>Save</Button>  {' '}
          <Button variant="info" size="sm" onClick={handleCancel}>Cancel</Button>
      </>}
    </>
  );
}

export default TaskElementEdit; 