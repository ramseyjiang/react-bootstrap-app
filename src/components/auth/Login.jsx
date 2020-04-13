import React, { useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import InputText from '../common/form/InputText';
import { useAuthContext } from "../../contexts/AuthContext";
import RenderLoading from '../common/utils/RenderLoading';

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
    authApi.firebaseLogin(login);
  }

  return (
    <>
    { authApi.state.loading && (<RenderLoading />)}
    { !authApi.state.loading && 
      <Container className="justify-content-center col-6 bg-light rounded">
        { authApi.state.error && <Alert variant='danger'>{authApi.state.error}</Alert>}
        <Form onSubmit={handleLogin} method="post" className="auth-padding">
          <InputText placeholder="Please input email" type="text" label="Email" name="email" value={login.email} onChange={handleChange}/>
          <InputText placeholder="Please input password" type="password" label="Password" name="password" value={login.password} onChange={handleChange}/>
          <Button variant="primary" type="submit" size="sm">Login</Button>
        </Form>
      </Container> }
    </>
  );
}