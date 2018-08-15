import React from 'react';
import axios from 'axios';
import {Col, CardTitle, Input, Button} from 'mdbreact';
import FormErrors from './FormErrors';

class FormForget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      info: '',
      formErrors: {email: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }
  async componentDidMount() {
    const error = await axios.get('/auth/flash/error')
    const info = await axios.get('/auth/flash/info')
    if (error.data[0]) {
      this.setState({ error: error.data[0]})
    } else if (info.data[0]) {
      this.setState({ info: info.data[0]})
    }
  }
  checkFlash() {
    const { error, info } = this.state
    if (error) {
        return <p className="red-text h6">{error}</p>
    } else if (info) {
        return <p className="green-text h6">{info}</p>
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

    switch(fieldName){
      case 'email':
        let emailTemp = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);;
             // .split(',')
             // .map(email => email.trim())
             // .filter(email => emailTemp.test(email)===false);

          emailValid = emailTemp;
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                }, this.validateForm);
  }

  validateForm(){
    this.setState({formValid: this.state.emailValid});
  }

  errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
  }
    render(){
        return(
         <Col  md="6" className="col-md-6">
            <CardTitle>
              <legend>Forget Password</legend>
              <hr/>
              <FormErrors formErrors={this.state.formErrors} />
              {this.checkFlash()}
              <form method="post" action="/auth/forgot">
                <Input name="email" className={`md-form ${this.errorClass(this.state.formErrors.email)}`} label="Type your email" icon="envelope" group type="email" value={this.state.email} 
                  onChange={(event) => this.handleUserInput(event)} 
                  onKeyPress={(event) => this.handleUserInput(event)} 
                  onBlur={(event) => this.handleUserInput(event)} />
                <div className="text-center">
                  <Button type="submit">Reset Password</Button>
                </div>
              </form>
            </CardTitle>
        </Col>
        );
    }
}

export default FormForget;
