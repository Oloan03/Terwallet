// Login.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import RegisterForm from './Register';
import './masuk.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegisterForm: false,
    };
  }

  toggleRegisterForm = () => {
    this.setState((prevState) => ({
      showRegisterForm: !prevState.showRegisterForm,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showRegisterForm ? (
          <RegisterForm />
        ) : (
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <h4>Don't have an account?</h4>
            <Button variant="secondary" onClick={this.toggleRegisterForm}>
              Register
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default LoginForm;
