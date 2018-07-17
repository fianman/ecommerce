import React from 'react';
import { Input, Button, Col, CardTitle} from 'mdbreact';
import FormErrors from './FormErrors';


class FormRegister extends React.Component {
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
	      // 				 .split(',')
						 // .map(email => email.trim())
						 // .filter(email => emailTemp.test(email)===false);

	      	emailValid = emailTemp;
	      	fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      		break;
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
	  			  usernameValid: usernameValid,
                  emailValid: emailValid,
                  passwordValid: passwordValid,
                  password2Valid: password2Valid
                }, this.validateForm);
	}

	validateForm(){
		this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.password2Valid});
	}

	errorClass(error) {
   		return(error.length === 0 ? '' : 'has-error');
	}
    render(){
      return(
			<Col md="6" className="col-md-6">
			  <CardTitle>
				Form register
 					<FormErrors formErrors={this.state.formErrors} />
				
				<form method="post" action="/auth/register">
				    <p className="h5 text-center mb-4">Sign up</p>
				    <Input name="first_name" type="hidden" value=""/>
				    <Input name="last_name" type="hidden" value=""/>
				    <Input name="username" className={`md-form ${this.errorClass(this.state.formErrors.username)}`} label="Username" icon="user" group type="text" value={this.state.username} onChange={(event) => this.handleUserInput(event)}/>
		            <Input name="email" className={`md-form ${this.errorClass(this.state.formErrors.email)}`} label="Your email" icon="envelope" group type="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
		            <Input name="password" className={`md-form ${this.errorClass(this.state.formErrors.password)}`} label="Your password" icon="lock" group type="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)}/>
		            <Input name="password2" className={`md-form ${this.errorClass(this.state.formErrors.password2)}`} label="Your confirm password" icon="lock" group type="password" value={this.state.password2} onChange={(event) => this.handleUserInput(event)}/>
				    <div className="text-center">
				        <Button type="submit" color="deep-orange" disabled={!this.state.formValid}>Sign up</Button>
				    </div>
				</form>
			  </CardTitle>
			</Col>
		)
	}
}

export default FormRegister;
