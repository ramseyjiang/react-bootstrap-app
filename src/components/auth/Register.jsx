import React, { useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import InputText from '../common/form/InputText';
import { useAuthContext } from "../../contexts/AuthContext";
import RenderLoading from '../common/utils/RenderLoading';
import Social from './Social';

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
  }

  const handleGoogle = () => {
    authApi.socialSignIn('google');
  };

  const handleFb = () => {
    authApi.socialSignIn('fb');
  };

  return (
    <>
    { authApi.state.loading && (<RenderLoading />)}
    { !authApi.state.loading && 
      <Container className="justify-content-center col-6 bg-light rounded">
        { authApi.state.error && <Alert variant='danger'>{authApi.state.error}</Alert>}
        <Form onSubmit={handleRegister} method="post" className="auth-padding">
          <Social handleGoogle={handleGoogle} handleFb={handleFb} title="Register with"/>
          <InputText placeholder="Please input username" type="text" label="Username" name="username" value={register.username} onChange={handleChange}/>
          <InputText placeholder="Please input email" type="email" label="Email" name="email" value={register.email} onChange={handleChange}/>
          <InputText placeholder="Please input password" type="password" label="Password" name="password" value={register.password} onChange={handleChange}/>
          <Button variant="primary" type="submit" size="sm">Register</Button>
        </Form>
      </Container> }
    </>
  );
}