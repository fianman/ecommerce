import React, { Component } from 'react'
import Stepper from 'react-stepper-horizontal'
import RegisterStep from './RegisterStep'
import ProfileStep from './ProfileStep'
import TermsStep from './TermsStep'
import FinishStep from './FinishStep'

class FormRegister extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone: '',
      hanya_mau: '',
      tidak_mau: '',
      sakit: '',
      vegetarian: '',
      steps: [{
        title: 'Registration',
        onClick: (e) => {
          e.preventDefault()
          this.setState({
						currentStep: 0
					})
        }
      }, {
        title: 'Profile',
        onClick: (e) => {
          e.preventDefault()
					this.setState({
						currentStep: 1
					})
        }
      }, {
        title: 'Terms and Condition',
        onClick: (e) => {
          e.preventDefault()
					this.setState({
						currentStep: 2
					})
        }
      }, {
        title: 'Finish',
        onClick: (e) => {
          e.preventDefault()
					this.setState({
						currentStep: 3
					})
        }
      }],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  updateRegistration = (username, email, password) => {
    this.setState({ username, email, password })
  }
  updateProfile = (first_name, last_name, phone) => {
    this.setState({ first_name, last_name, phone })
  }
  updateCheckbox = (hanya_mau, tidak_mau, sakit, vegetarian) => {
    this.setState({ hanya_mau, tidak_mau, sakit, vegetarian })
  }
  onClickNext() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }
	renderContent() {
		switch (this.state.currentStep) {
			case 0:
				return <RegisterStep updateRegistration={this.updateRegistration} onClickNext={this.onClickNext} />
      case 1:
        return <ProfileStep updateCheckbox={this.updateCheckbox} updateProfile={this.updateProfile} onClickNext={this.onClickNext} />
      case 2:
        return <TermsStep onClickNext={this.onClickNext} />
      case 3:
        return <FinishStep data={this.state}/>
			default:
				break;
		}
	}

  render() {
    const { steps, currentStep } = this.state;
    return (
      <div>
        <Stepper steps={ steps } activeStep={ currentStep } />
        {this.renderContent()}
      </div>
    );
  }
}

export default FormRegister
