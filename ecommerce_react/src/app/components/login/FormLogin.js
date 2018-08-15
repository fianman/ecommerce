
import React from 'react';
import axios from 'axios';
import { Container, Row, ModalFooter, Card, CardBody, Input, Button, Col, Fa } from 'mdbreact';
import FormErrors from './FormErrors';

class FormLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      visible: false
    }
  }

  async componentDidMount() {
    const message = await axios.get('/auth/flash/error')
    if (message.data[0]) {
      this.setState({ message: message.data[0]})
    }
  }
  checkFlash() {
    const { message } = this.state
    return message
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
        let emailTemp = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
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

  changeVisibility() {
    const { visible } = this.state
    this.setState({ visible: !visible })
  }
  eyeIcon() {
    if (!this.state.visible){ return "eye-slash"}
    return "eye"
  }

  passwordType() {
    if (!this.state.visible) { return "password" }
    return "text"
  }
  showFlash(){
    document.getElementById("id_flash").style.visibility = "hidden";
  }
  
  render(){
    return(
      <Container>
        <Row className="cntr-fluid">
          <Col className="sm-6">
            <Card>
              <CardBody>
                <form method="post" action="/auth/login">
                  <p className="h3 text-center py-4"><strong>Login</strong></p>
                  
                    <FormErrors formErrors={this.state.formErrors} />
                  
                  <div className="grey-text">
                    <p id="id_flash" className="red-text"><strong>{this.checkFlash()}</strong></p>
                    	<Row>
                    		<Col className="col-md-10">
                    			<Input name="email"
			                      label="Type your email"  icon="envelope" group type="email"
			                      value={this.state.email}
			                      onChange={(event) => this.handleUserInput(event), this.showFlash.bind(this)} 
                            onKeyPress={(event) => this.handleUserInput(event), this.showFlash.bind(this)} 
                            onFocus={(event) => this.handleUserInput(event), this.showFlash.bind(this)} 
                            onBlur={(event) => this.handleUserInput(event)} />
                    		</Col>
                    	</Row>
                    	<Row>
                    		<Col className="col-md-10">
                      		<Input name="password"
  			                      label="Type your password"  group icon="lock" type={this.passwordType()}
  			                      value={this.state.password}
  			                      onChange={(event) => this.handleUserInput(event)} 
                              onKeyPress={(event) => this.handleUserInput(event), this.showFlash.bind(this)} 
                              onBlur={(event) => this.handleUserInput(event)} />
                    		</Col>
                    		<Col className="col-md-2 icon-eyes"><Fa icon={this.eyeIcon()} onClick={this.changeVisibility.bind(this)}/>
                    		</Col>
                    	</Row>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" disabled={!this.state.formValid} type="submit">
                      <strong>Login</strong>
                    </Button>
                    <p className="font-small grey-text d-flex justify-content-end">Forgot <a href="/auth/forgot" className="blue-text ml-1"> Password?</a></p>
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
        </Row>
      </Container>
    );
  }
}

export default FormLogin;
