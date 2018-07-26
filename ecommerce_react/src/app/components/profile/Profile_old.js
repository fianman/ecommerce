import React from 'react';
import { Input, Button, Col, Fa, Row, Container } from 'mdbreact';
import { connect } from 'react-redux';
import Checkbox from './CheckBox';

const items = [
  'Hanya Mau',
  'Tidak Mau',
  'Kondisi Khusus / Sakit',
  'Vegetarian'
];

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
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
      <Container className="container-fluid">
        <form method="post" action="/api/profile">
          <Col className="col-md-12">
            <Row>
              <Col className="col-md-6 legend-profile"><legend>Profile</legend></Col>
              <Col className="col-md-6 legend-profile"><legend>Billing Address</legend></Col>
            </Row>
            <Row>
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-6">
                    <Input icon="user" name="first_name" label="First Name" group type="text" validate required/>
                  </Col>
                  <Col className="col-md-6">
                    <Input name="last_name"  label="Last Name" group type="text" validate/>
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-6">
                <Row>
                  <Col className="col-md-6">
                    <Input icon="address-card-o" name="street" label="Street" group type="text"></Input>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6">
                <Input icon="phone" name="phone" label="Phone Number" group type="tel" validate />
              </Col>
              <Col className="col-md-6">
                <Input icon="address-book" name="state" label="State" group type="text"></Input>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6">
                <Input icon="bank" name="bank_account" label="Bank Account" group type="text"></Input>
              </Col>
              <Col className="col-md-6">
                <Input icon="address-book-o" name="city" label="City" group type="text"></Input>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6">

              </Col>
              <Col className="col-md-6">
                <Input icon="address-card" name="country" label="Country" group type="text"></Input>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6">
                <Input icon="street-view" name="address1" label="Address 1" group type="text"></Input>
              </Col>
              <Col className="col-md-6">
                <Input icon="street-view" name="address2" label="Address 2" group type="text"></Input>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6">
                <Input icon="street-view" name="address3" label="Address 3" group type="text"></Input>
              </Col>
              <Col className="col-md-6">
                <Input icon="street-view" name="address4" label="Address 4" group type="text"></Input>
              </Col>
            </Row>

          </Col>
          <div className="text-center">
            <Button rounded type="submit">Update <Fa className="ml-1" icon="pencil" /></Button>
            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
              Pantangan <Fa className="ml-1" icon="warning" />
            </button>
          </div>

          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Pantangan</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <p className="text-center"><strong>Pilihan</strong></p>
                      <div class="modal-body">
                          {this.createCheckboxes()}
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-primary">Save changes</button>
                      </div>
                  </div>
              </div>
          </div>

        </form>
    </Container>
    );
  }
}

function mapStatetoProps({ auth }){
  return { auth }
}

export default connect(mapStatetoProps)(Profile);
