import React from 'react';
import { Input, Button, Col, CardTitle, Fa, Row, Table } from 'mdbreact';
import axios from 'axios'
import FormErrors from '../FormErrors';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';


class RegisterStep extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			password2: '',
			formErrors: {username: '', email: '', password: '', password2: ''},
			usernameValid: false,
			emailValid: false,
			passwordValid: false,
			password2Valid: false,
			formValid: false,
			visible1: false,
			visible2: false,
		}
	}
    // compare email with email from database
	componentDidMount(){
  	this.props.fetchUser();
	}
	componentWillUnmount() {
		const { username, email, password} = this.state
		this.props.updateRegistration(username, email, password)
	}

	handleUserInput (e) {
	  const name = e.target.name;
	  const value = e.target.value;
	  this.setState({[name]: value},
	                () => { this.validateField(name, value) });
	}
	async validateEmail(event) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = await axios.post("/auth/check", { email: event.target.value}, {})
		fieldValidationErrors.email = emailValid.data ? '' : ' has been registered'

		if (fieldValidationErrors.email) {
			this.setState({formErrors: fieldValidationErrors,
				emailValid: emailValid.data
				}, this.validateForm);
		}
	}
	validateField(fieldName, value){
	  let fieldValidationErrors = this.state.formErrors;
	  let usernameValid = this.state.usernameValid;
	  let emailValid = this.state.emailValid;
	  let passwordValid = this.state.passwordValid;
	  let password2Valid = this.state.password2Valid;

	  switch(fieldName){
	  	case 'username':
  			usernameValid = value;
	  		fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
		break;
  		case 'email':
  			let emailTemp = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      	emailValid = emailTemp;
      	fieldValidationErrors.email = emailValid ? '' : ' is invalid';
	  		break;
    	case 'password':
		    passwordValid = value.length >= 8;
		    fieldValidationErrors.password = passwordValid ? '': ' min 8 character';
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
	  			  usernameValid: usernameValid,
                  emailValid: emailValid,
                  passwordValid: passwordValid,
                  password2Valid: password2Valid
                }, this.validateForm);
	}

	validateForm(){
		this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.password2Valid});
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
      	<div className="container-fluid">
					<h3 className="font-weight-bold pl-0 my-4"><strong>Registration</strong></h3>
					<Col className="col-md-12">
					  <CardTitle>
	 					<FormErrors formErrors={this.state.formErrors} />
						<form>
						 
							<Row>
								<Col className="col-md-10">
							     <Input name="username" className="" label="Username" icon="user" group type="text" autoFocus value={this.state.username} onChange={(event) => this.handleUserInput(event)}/>
					            </Col>
				            </Row>
				            <Row>
								<Col className="col-md-10">
				            <Input name="email" className="" label="Your email" icon="envelope" group type="email" value={this.state.email} onBlur={(event) => this.validateEmail(event)} onChange={(event) => this.handleUserInput(event)}/>
				             </Col>
				            </Row>
				            <Row>
								<Col className="col-md-10">
				            
				            <Input name="password" className="" label="Your password" icon="lock" group type={this.passwordType1()} value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
				            </Col>
				            	<Col className="col-md-2">
									<Fa icon={this.eyeIcon1()} onClick={this.changeVisibility1.bind(this)} className="icon-eyes"/> 
							</Col>
				            </Row>
				             <Row>
								<Col className="col-md-10">
				            <Input name="password2" className="" label="Your confirm password" icon="lock" group type={this.passwordType2()} value={this.state.password2} onChange={(event) => this.handleUserInput(event)}/>
							</Col>
				            	
				            
								<Col className="col-md-2">
									<Fa icon={this.eyeIcon2()} onClick={this.changeVisibility2.bind(this)} className="icon-eyes"/> 
							</Col>
				            </Row>
				            
					    <div className="text-center">
					        <Button type="button" onClick={this.props.onClickNext.bind(this)} color="deep-orange" disabled={!this.state.formValid}>Next</Button>
					    </div>
						</form>
					  </CardTitle>
					</Col>
				</div>
		)
	}
}

function mapStatetoProps({ auth }){
  		return { auth }
}

export default connect(mapStatetoProps,actions)(RegisterStep);
