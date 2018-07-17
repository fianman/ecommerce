
import React from 'react';
import { Input, Button, Col, Fa, CardTitle } from 'mdbreact';
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
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is not same';
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
      <Col  md="6" className="col-md-6">
        <CardTitle>
          Form login
          <FormErrors formErrors={this.state.formErrors} />
        
          <form method="post" action="/auth/login">
            <p className="h5 text-center mb-4">Sign in</p>
            <Input name="email" className={`md-form ${this.errorClass(this.state.formErrors.email)}`} label="Type your email" icon="envelope" group type="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
            <Input name="password" className={`md-form ${this.errorClass(this.state.formErrors.password)}`} label="Type your password" icon="lock" group type="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
            <div className="text-center">
              <Button type="submit" disabled={!this.state.formValid}>Login</Button>
            </div>
            
            <div className="modal-footer">
              <div className="options font-weight-light">
                  <p>Forgot <a href="/auth/forgot">Password?</a></p>
              </div>
            </div>
            
            <div className="text-center">
              <Button color="pink" href="/auth/instagram">
                <Fa icon="instagram" className="mr-3"/>
                Sign in with Instagram
              </Button>
              <Button color="danger" href="/auth/google">
                <Fa icon="google" className="mr-3"/>
                Sign in with Google
              </Button>
            </div>
          </form>
        </CardTitle>
      </Col>
    );
  }
}

export default FormLogin;
