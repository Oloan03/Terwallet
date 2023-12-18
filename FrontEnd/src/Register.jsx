// Register.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './masuk.css';
import LoginForm from './Login';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginForm: false,
        };
    }

    toggleLoginForm = () => {
        this.setState((prevState) => ({
            showLoginForm: !prevState.showLoginForm,
        }));
    };

  render() {
    return (
      <div>
        {this.state.showLoginForm ? (
            <LoginForm />
        ) : (
            <Form>
                <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit">Daftar</Button>
                <h4>Already have an account.</h4>
                <Button variant='secondary' onClick={this.toggleLoginForm}>Login</Button>
            </Form>
        )}
      </div>
    );
  }
}

export default RegisterForm;