import React, { useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import InputText from '../common/form/InputText';
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const { authApi } = useAuthContext();
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    authApi.loading(); 
    e.preventDefault(); 
    authApi.login(login.username);                       
  }

  return (
    <>
    { authApi.state.loading && <p>Loading</p>}
    { !authApi.state.loading && 
      <Container className="justify-content-center col-6 bg-light">
        { authApi.state.error && <Alert variant='danger'>{authApi.state.error}</Alert>}
        <Form onSubmit={handleLogin} method="post">
          <Form.Row>
            <InputText placeholder="Please input username" type="text" label="Username" name="username" value={login.username} onChange={handleChange}/>
          </Form.Row>
          <Form.Row>
            <InputText placeholder="Please input password" type="password" label="Password" name="password" value={login.password} onChange={handleChange}/>
          </Form.Row>
            <Button variant="primary" type="submit" size="sm">Login</Button>
        </Form>
      </Container> }
    </>
  );
}