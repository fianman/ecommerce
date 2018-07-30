import React from 'react';
import { Input, Button, Col, CardTitle, Fa, Row } from 'mdbreact';
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
			bank_account: '',
      address1: '',
      address2: '',
      address3: '',
      address4: '',
      street: '',
      city: '',
      states: '',
      country: '',
      phone: '',
			hanya_mau: '',
	    tidak_mau: '',
	    sakit: '',
	    vegetarian: '',
			formErrors: {
				first_name: '', last_name: '', bank_account: '',
				address1: '', address2: '', address3: '', address4: '',
				street: '', city: '', states: '', country: '', phone: ''
			},
			first_nameValid: false,
			last_nameValid: false,
			bank_accountValid: false,
			address1Valid: false,
			address2Valid: false,
			address3Valid: false,
			address4Valid: false,
			streetValid: false,
			cityValid: false,
			statesValid: false,
			countryValid: false,
			phoneValid: false,
			formValid: false,
			modal: false
		}
		this.toggle = this.toggle.bind(this);
	}
	componentWillMount() {
		this.selectedCheckboxes = new Set();
    this.setState({
      first_name: this.props.data.first_name,
      last_name: this.props.data.last_name,
      bank_account: this.props.data.bank_account,
      address1: this.props.data.address1,
      address2: this.props.data.address2,
      address3: this.props.data.address3,
      address4: this.props.data.address4,
      street: this.props.data.street,
      city: this.props.data.city,
      states: this.props.data.states,
      country: this.props.data.country,
      phone: this.props.data.phone,
		  first_nameValid: this.props.data.first_name,
      last_nameValid: this.props.data.last_name,
      phoneValid: this.props.data.phone,
      bank_accountValid: this.props.data.bank_account,
      address1Valid: this.props.data.address1,
      address2Valid: this.props.data.address2,
      address3Valid: this.props.data.address3,
      address4Valid: this.props.data.address4,
      cityValid: this.props.data.city,
      streetValid: this.props.data.street,
      countryValid: this.props.data.country,
      statesValid: this.props.data.states,
      }, this.validateForm
    );
	}
	componentWillUnmount() {
		const {
			first_name, last_name, bank_account, address1, address2, address3, address4, street, city, states, country, phone
		} = this.state
		this.props.updateProfile(first_name, last_name, bank_account, address1, address2, address3, address4, street, city, states, country, phone);
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
	  let first_nameValid 		= this.state.first_nameValid;
	  let last_nameValid 		= this.state.last_nameValid;
	  let bank_accountValid 	= this.state.bank_accountValid;
	  let address1Valid 		= this.state.address1Valid;
	  let address2Valid 		= this.state.address2Valid;
	  let address3Valid 		= this.state.address3Valid;
	  let address4Valid 		= this.state.address4Valid;
	  let streetValid 			= this.state.streetValid;
	  let cityValid 			= this.state.cityValid;
	  let statesValid 			= this.state.statesValid;
	  let countryValid 			= this.state.countryValid;
	  let phoneValid  			= this.state.phoneValid;

	  switch(fieldName){
	  	case 'first_name':
  			first_nameValid = value;
	  		fieldValidationErrors.first_name = first_nameValid ? '' : ' is invalid';
				break;
  		case 'last_name':
				last_nameValid = value;
				fieldValidationErrors.last_name = last_nameValid ? '' : ' is invalid';
				break;
		case 'bank_account':
				bank_accountValid = value;
				fieldValidationErrors.bank_account = bank_accountValid ? '' : ' is invalid';
				break;
		case 'address1':
				address1Valid = value;
				fieldValidationErrors.address1 = address1Valid ? '' : ' is invalid';
				break;
		case 'address2':
				address2Valid = value;
				fieldValidationErrors.address2 = address2Valid ? '' : ' is invalid';
				break;
		case 'address3':
				address3Valid = value;
				fieldValidationErrors.address3 = address3Valid ? '' : ' is invalid';
				break;
		case 'address4':
				address4Valid = value;
				fieldValidationErrors.address4 = address4Valid ? '' : ' is invalid';
				break;
		case 'street':
				streetValid = value;
				fieldValidationErrors.street = streetValid ? '' : ' is invalid';
				break;
		case 'city':
				cityValid = value;
				fieldValidationErrors.city = cityValid ? '' : ' is invalid';
				break;
		case 'country':
				countryValid = value;
				fieldValidationErrors.country = countryValid ? '' : ' is invalid';
				break;
		case 'states':
				statesValid = value;
				fieldValidationErrors.states = statesValid ? '' : ' is invalid';
				break;
    	case 'phone':
		    phoneValid = value;
		    fieldValidationErrors.phone = phoneValid ? '': ' min 8 character';
    		break;
  	 	default:
      	break;
	  }
	  this.setState({
			formErrors: fieldValidationErrors,
		  first_nameValid	: first_nameValid,
      last_nameValid	: last_nameValid,
      phoneValid		: phoneValid,
      bank_accountValid	: bank_accountValid,
      address1Valid		: address1Valid,
      address2Valid		: address2Valid,
      address3Valid		: address3Valid,
      address4Valid		: address4Valid,
      cityValid			: cityValid,
      streetValid		: streetValid,
      countryValid 		: countryValid,
      statesValid		: statesValid,
      }, this.validateForm);
	}

	validateForm(){
		this.setState({
			formValid: this.state.first_nameValid && this.state.last_nameValid &&
			this.state.phoneValid && this.state.bank_accountValid &&
			this.state.address1Valid && this.state.address2Valid &&
			this.state.address3Valid && this.state.address4Valid &&
			this.state.streetValid && this.state.cityValid &&
			this.state.statesValid && this.state.countryValid
		});
	}

	errorClass(error) {
   		return(error.length === 0 ? '' : 'has-error');
	}

// Modal
  updateOptional = (name, value) => {
    this.setState({ [name]: value })
  }

  onClickSave() {
    const { hanya_mau, tidak_mau, sakit, vegetarian } = this.state
		this.props.updateCheckbox(hanya_mau, tidak_mau, sakit, vegetarian)
  }
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
      updateOptional={this.updateOptional}
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
				<Col className="col-md-12">
				  <CardTitle>
            <FormErrors formErrors={this.state.formErrors} />
            <form>
              <Col className="col-md-12">
                <Row>
                  <Col className="col-md-6 legend-profile"><legend>Profile</legend></Col>
                  <Col className="col-md-6 legend-profile"><legend>Billing Address</legend></Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <Row>
                      <Col className="col-md-6">
                        <Input icon="user" name="first_name" label="First Name" group type="text" required value={this.state.first_name} onChange={(event) => this.handleUserInput(event)}/>
                      </Col>
                      <Col className="col-md-6">
                        <Input name="last_name"  label="Last Name" group type="text" value={this.state.last_name} onChange={(event) => this.handleUserInput(event)}/>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-md-6">
                    <Row>
                      <Col className="col-md-6">
                        <Input icon="address-card-o" name="street" label="Street" group type="text" value={this.state.street} onChange={(event) => this.handleUserInput(event)}></Input>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <Input icon="phone" name="phone" label="Phone Number" group type="tel" value={this.state.phone} onChange={(event) => this.handleUserInput(event)}/>
                  </Col>
                  <Col className="col-md-6">
                    <Input icon="address-book" name="states" label="State" group type="text" value={this.state.states} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <Input icon="bank" name="bank_account" label="Bank Account" group type="text" value={this.state.bank_account} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                  <Col className="col-md-6">
                    <Input icon="address-book-o" name="city" label="City" group type="text" value={this.state.city} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                  </Col>
                  <Col className="col-md-6">
                    <Input icon="address-card" name="country" label="Country" group type="text" value={this.state.country} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <Input icon="street-view" name="address1" label="Address 1" group type="text" value={this.state.address1} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                  <Col className="col-md-6">
                    <Input icon="street-view" name="address2" label="Address 2" group type="text" value={this.state.address2} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-md-6">
                    <Input icon="street-view" name="address3" label="Address 3" group type="text" value={this.state.address3} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                  <Col className="col-md-6">
                    <Input icon="street-view" name="address4" label="Address 4" group type="text" value={this.state.address4} onChange={(event) => this.handleUserInput(event)}></Input>
                  </Col>
                </Row>
              </Col>
            </form>
          </CardTitle>
				</Col>
				<div className="text-center">
					<button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            Pantangan <Fa className="ml-1" icon="warning" />
          </button>
        </div>
				<div className="text-center">
          <Button type="button" onClick={this.props.onClickNext.bind(this)} color="deep-orange" disabled={!this.state.formValid}>Next</Button>
		    </div>
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
                  <button type="button" onClick={() => this.onClickSave()} className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
		)
	}
}

export default ProfileStep;
