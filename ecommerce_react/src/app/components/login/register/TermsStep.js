import React, { Component } from 'react'
import { Button } from 'mdbreact';

class TermsStep extends Component {
  constructor(props){
		super(props);
		this.state = {
			terms: false,
			formErrors: {terms: ''},
			termsValid: false,
			formValid: false
		}
	}
	handleUserInput (e) {
	  const name = e.target.name;
	  const value = e.target.checked;
	  this.setState({[name]: value},
	                () => { this.validateField(name, value) });
	}
	validateField(fieldName, value){
	  let fieldValidationErrors = this.state.formErrors;
	  let termsValid = this.state.termsValid;

	  switch(fieldName){
	  	case 'terms':
  			termsValid = value;
	  		fieldValidationErrors.terms = termsValid ? '' : ' is invalid';
      	break;
      default:
        break;
	  }
	  this.setState({formErrors: fieldValidationErrors,
	  			         termsValid: termsValid
                  }, this.validateForm);
	}

	validateForm(){
		this.setState({formValid: this.state.termsValid});
	}

	errorClass(error) {
   		return(error.length === 0 ? '' : 'has-error');
	}
  render() {
    return(
      <div>
        <div>
            <h3 className="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
            <div className="form-check">
                <input name="terms" type="checkbox" value={this.state.terms} onClick={(event) => this.handleUserInput(event)}/>
                <label><strong> I agree to the terms and conditions</strong></label>
            </div>
            <Button type="button" onClick={this.props.onClickNext.bind(this)} color="deep-orange" disabled={!this.state.formValid}>Next</Button>
        </div>
    </div>
    )
  }
}

export default TermsStep
