
import React from 'react';
import { Container, Row, ModalFooter, Card, CardBody, Input, Button, Col, Fa } from 'mdbreact';
import FormErrors from './FormErrors';

class FormLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value){
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName){
      case 'email':
        let emailTemp = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);;
             // .split(',')
             // .map(email => email.trim())
             // .filter(email => emailTemp.test(email)===false);

          emailValid = emailTemp;
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 1;
          fieldValidationErrors.password = passwordValid ? '': ' is empty';
          break;
        default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
  }

  validateForm(){
    this.setState({formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
  }

  render(){
    return(
      <Container>
        <Row>
          <Col></Col>
          <Col md="6">
            <Card>
              <CardBody>
                <FormErrors formErrors={this.state.formErrors} />
                <form method="post" action="/auth/login">
                  <p className="h3 text-center py-4"><strong>Login</strong></p>
                  <div className="grey-text">
                    <Input name="email"
                      className={`md-form ${this.errorClass(this.state.formErrors.email)}`}
                      label="Type your email" icon="envelope" group type="email"
                      value={this.state.email}
                      onChange={(event) => this.handleUserInput(event)} />
                    <Input name="password"
                      className={`md-form ${this.errorClass(this.state.formErrors.password)}`}
                      label="Type your password" icon="lock" group type="password"
                      value={this.state.password}
                      onChange={(event) => this.handleUserInput(event)} />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" disabled={!this.state.formValid} type="submit">
                      <strong>Login</strong>
                    </Button>
                    <p className="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="/auth/forgot" className="blue-text ml-1"> Password?</a></p>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                </form>
                <div className="text-center">
                  <Button type="button" href="/auth/instagram" color="pink" className="mr-md-3 z-depth-1a">
                    <Fa icon="instagram" className="white-text text-center" />
                    <strong> Instagram</strong>
                  </Button>
                  <Button type="button" href="/auth/google" color="red" className="z-depth-1a">
                    <Fa icon="google-plus" className="white-text" />
                    <strong> Google</strong>
                  </Button>
                </div>
                <ModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="/register" className="blue-text ml-1"> Sign Up</a></p>
                </ModalFooter>
              </CardBody>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default FormLogin;
