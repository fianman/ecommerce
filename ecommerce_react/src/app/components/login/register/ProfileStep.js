import React from 'react';
import { Input, Button, Col, CardTitle, Fa } from 'mdbreact';
import FormErrors from '../FormErrors';
import Checkbox from '../../profile/CheckBox';

const items = [
  'Hanya Mau',
  'Tidak Mau',
  'Kondisi Khusus / Sakit',
  'Vegetarian'
];

class ProfileStep extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			phone: '',
			hanya_mau: '',
	    tidak_mau: '',
	    sakit: '',
	    vegetarian: '',
			formErrors: {first_name: '', last_name: '', phone: ''},
			first_nameValid: false,
			last_nameValid: false,
			phoneValid: false,
			formValid: false,
			modal: false
		}
		this.toggle = this.toggle.bind(this);
	}
	componentWillMount() {
		this.selectedCheckboxes = new Set();
	}
	componentWillUnmount() {
		const { first_name, last_name, phone, hanya_mau, tidak_mau, sakit, vegetarian } = this.state
		this.props.updateProfile(first_name, last_name, phone, hanya_mau, tidak_mau, sakit, vegetarian)
	}

// Form validation
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

// Modal
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	toggleCheckbox = label => {

    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
	createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )
  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

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
						<button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
              Pantangan <Fa className="ml-1" icon="warning" />
            </button>
						<div className="text-center">
				        <Button type="button" onClick={this.props.onClickNext.bind(this)} color="deep-orange" disabled={!this.state.formValid}>Next</Button>
				    </div>
					</form>
				  </CardTitle>
				</Col>

				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Pantangan</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <p className="text-center"><strong>Pilihan</strong></p>
                    <div className="modal-body">
                        {this.createCheckboxes()}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
			</div>
		)
	}
}

export default ProfileStep;
