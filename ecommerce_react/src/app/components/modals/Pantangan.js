import React, { Component } from 'react'
import Checkbox from '../profile/CheckBox'

const items = [
  'Hanya Mau',
  'Tidak Mau',
  'Kondisi Khusus / Sakit',
  'Vegetarian'
];
class PantanganModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hanya_mau: '',
      tidak_mau: '',
      sakit: '',
      vegetarian: ''
    }
  }
  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  onClickSave() {
    const { hanya_mau, tidak_mau, sakit, vegetarian } = this.state
		this.props.updateOptionals(hanya_mau, tidak_mau, sakit, vegetarian)
  }
  updateOptional = (name, value) => {
    this.setState({ [name]: value })
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
  render() {
    return (
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
    )
  }
}

export default PantanganModal
