import React from 'react';
import { Input, Button, Col, Fa, Row, Container, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { connect } from 'react-redux';

class Profile extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
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
                <a href="#" className="btn btn-danger" onClick={this.toggle} >Pantangan <Fa className="ml-1" icon="warning" /></a>
              </div>
            </form>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>

                  <p class="text-center">
                    <strong>Your rating</strong>
                  </p>
                  <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-179" value="option1" checked />
                    <label class="form-check-label" for="radio-179">Very good</label>
                  </div>

                  <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-279" value="option2"/>
                    <label class="form-check-label" for="radio-279">Good</label>
                  </div>

                  <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-379" value="option3"/>
                    <label class="form-check-label" for="radio-379">Mediocre</label>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-479" value="option4"/>
                    <label class="form-check-label" for="radio-479">Bad</label>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" name="group1" type="radio" id="radio-579" value="option5"/>
                    <label class="form-check-label" for="radio-579">Very bad</label>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                  <Button color="primary">Save changes</Button>
                </ModalFooter>
              </Modal>
        </Container>
        );
    }
}
      
function mapStatetoProps({ auth }){
  return { auth }
} 

export default connect(mapStatetoProps)(Profile);                      