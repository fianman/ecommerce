import React from 'react';
import { Col, Row } from 'mdbreact';

var PropTypes = require('prop-types');

class CheckBox extends React.Component {
  state = {
    isChecked: false,
    hanya_mau: '',
    tidak_mau: '',
    sakit: '',
    vegetarian: ''
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const  {label}  = this.props;
    const  {isChecked}  = this.state;
    return (
      <div className="form-check">
        <Row>
          <Col className="col-md-4">
            <label>
              <input
                type="checkbox"
                value={label}
                checked={isChecked}
                onChange={this.toggleCheckboxChange}
              />
              {label}
            </label>
          </Col>
          <Col className="col-md-8 mdl-long">
            { label ==='Hanya Mau' && isChecked === true &&
              <input name="hanya_mau" className="form-control" type="text"/>
            }
            { label ==='Tidak Mau' && isChecked === true &&
              <input name="tidak_mau" className="form-control" type="text"/>
            }
            { label ==='Kondisi Khusus / Sakit' && isChecked === true &&
              <input name="sakit" className="form-control" type="text"/>
            }
            { label ==='Vegetarian' && isChecked === true &&
              <input name="vegetarian" className="form-control" type="text"/>
            }
          </Col>
        </Row>
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CheckBox;
