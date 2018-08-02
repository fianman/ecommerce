import React from 'react';
import {Col, CardTitle, Input, Button, Fa, Row} from 'mdbreact';
import FormErrors from './FormErrors';

class FormReset extends React.Component {
  constructor(props){
    super(props);
    this.state = {     
      password: '',  
      password2: '',    
      formErrors: {password: '', password2: ''},
      passwordValid: false,
      password2Valid: false,
      formValid: false,
      visible1: false,
      visible2: false
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
    let passwordValid = this.state.passwordValid;
    let password2Valid = this.state.password2Valid;

    switch(fieldName){
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        passwordValid = value
        break;
      case 'password2':
        password2Valid = value === passwordValid ? true : false;
        fieldValidationErrors.password2 = password2Valid ? '': ' must equals Password';
        break;
      default:
      break;
    }
    this.setState({formErrors: fieldValidationErrors,
                  passwordValid: passwordValid,
                  password2Valid: password2Valid,
                }, this.validateForm);
  }

  validateForm(){
    this.setState({formValid: this.state.passwordValid && this.state.password2Valid});
  }

  changeVisibility1() {
    const { visible1 } = this.state
    this.setState({ visible1: !visible1 })
  }
  changeVisibility2() {
    const { visible2 } = this.state
    this.setState({ visible2: !visible2 })
  }
  eyeIcon1() {
    if (!this.state.visible1){ return "eye-slash" }
    return "eye"
  }
  eyeIcon2() {
    if (!this.state.visible2){ return "eye-slash" }
    return "eye"
  }
  passwordType1() {
    if (!this.state.visible1) { return "password" }
    return "text"
  }
  passwordType2() {
    if (!this.state.visible2) { return "password" }
    return "text"
  }
    render(){
        return(       	
         <Col  md="6" className="col-md-6">
            <CardTitle>
              Reset Password
              <hr/>   
              <FormErrors formErrors={this.state.formErrors} />
              <form method="post" action={`/reset/${this.props.match.params.token}`}>   
                <Row>  
                  <Col className="col-md-10">     
                    <Input name="password" label="New Password" icon="lock" group type={this.passwordType1()} value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
                  </Col>
                  <Col className="col-md-2"> 
                    <Fa icon={this.eyeIcon1()} onClick={this.changeVisibility1.bind(this)} className="icon-eyes"/>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-10">  
                    <Input name="password2" label="Confirm Password" icon="lock" group type={this.passwordType2()} value={this.state.password2} onChange={(event) => this.handleUserInput(event)}/>
                  </Col>
                  <Col className="col-md-2"> 
                    <Fa icon={this.eyeIcon2()} onClick={this.changeVisibility2.bind(this)} className="icon-eyes"/>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button disabled={!this.state.formValid} type="submit">Update Password</Button>
                </div>
              </form>
            </CardTitle>
        </Col>			
        );
    }
}
      
export default FormReset;
                      