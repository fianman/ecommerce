import React from 'react';
import { Input, Button, Col, CardTitle} from 'mdbreact';
import FormErrors from '../FormErrors';

class ProfileStep extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			phone: '',
			formErrors: {first_name: '', last_name: '', phone: ''},
			first_nameValid: false,
			last_nameValid: false,
			phoneValid: false,
			formValid: false
		}
	}
	componentWillUnmount() {
		const { first_name, last_name, phone } = this.state
		this.props.updateProfile(first_name, last_name, phone)
	}

	handleUserInput (e) {
	  const name = e.target.name;
	  const value = e.target.value;
	  this.setState({[name]: value},
	                () => { this.validateField(name, value) });
	}
	validateField(fieldName, value){
	  let fieldValidationErrors = this.state.formErrors;
	  let first_nameValid = this.state.first_nameValid;
	  let last_nameValid = this.state.last_nameValid;
	  let phoneValid = this.state.phoneValid;

	  switch(fieldName){
	  	case 'first_name':
  			first_nameValid = value;
	  		fieldValidationErrors.first_name = first_nameValid ? '' : ' is invalid';
				break;
  		case 'last_name':
				last_nameValid = value;
				fieldValidationErrors.last_name = last_nameValid ? '' : ' is invalid';
				break;
    	case 'phone':
		    phoneValid = value;
		    fieldValidationErrors.phone = phoneValid ? '': ' min 8 character';
    		break;
  	 	default:
      	break;
	  }
	  this.setState({formErrors: fieldValidationErrors,
	  			  first_nameValid: first_nameValid,
                  last_nameValid: last_nameValid,
                  phoneValid: phoneValid
                }, this.validateForm);
	}

	validateForm(){
		this.setState({formValid: this.state.first_nameValid && this.state.last_nameValid && this.state.phoneValid});
	}

	errorClass(error) {
   		return(error.length === 0 ? '' : 'has-error');
	}
    render(){
      return(
      	<div className="container-fluid">
					<h3 className="font-weight-bold pl-0 my-4"><strong>Profile</strong></h3>
					<Col className="col-md-12">
					  <CardTitle>
	 					<FormErrors formErrors={this.state.formErrors} />
						<form>
					    <Input name="first_name" className={`md-form ${this.errorClass(this.state.formErrors.first_name)}`} label="First Name" group type="text" value={this.state.first_name} onChange={(event) => this.handleUserInput(event)}/>
	            <Input name="last_name" className={`md-form ${this.errorClass(this.state.formErrors.last_name)}`} label="Last Name" group type="text" value={this.state.last_name} onChange={(event) => this.handleUserInput(event)}/>
	            <Input name="phone" className={`md-form ${this.errorClass(this.state.formErrors.phone)}`} label="Phone Number" group type="number" value={this.state.phone} onChange={(event) => this.handleUserInput(event)}/>
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

export default ProfileStep;
