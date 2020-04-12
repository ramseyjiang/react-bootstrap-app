import React, { useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import InputText from '../common/form/InputText';
import { useAuthContext } from "../../contexts/AuthContext";
import RenderLoading from '../common/utils/RenderLoading';

export default function Register() {
  const { authApi } = useAuthContext();
  const [register, setRegister] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleRegister = e => {
    authApi.loading(); 
    e.preventDefault(); 
    authApi.firebaseRegister(register);
    authApi.login(register.username);                       
  }

  return (
    <>
    { authApi.state.loading && (<RenderLoading />)}
    { !authApi.state.loading && 
      <Container className="justify-content-center col-6 bg-light">
        { authApi.state.error && <Alert variant='danger'>{authApi.state.error}</Alert>}
        <Form onSubmit={handleRegister} method="post">
          <Form.Row>
            <InputText placeholder="Please input username" type="text" label="Username" name="username" value={register.username} onChange={handleChange}/>
          </Form.Row>
          <Form.Row>
            <InputText placeholder="Please input email" type="email" label="Email" name="email" value={register.email} onChange={handleChange}/>
          </Form.Row>
          <Form.Row>
            <InputText placeholder="Please input password" type="password" label="Password" name="password" value={register.password} onChange={handleChange}/>
          </Form.Row>
            <Button variant="primary" type="submit" size="sm">Register</Button>
        </Form>
      </Container> }
    </>
  );
}