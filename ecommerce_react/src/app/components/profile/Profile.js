import React from 'react';
import { Input, Button, Col, Fa, Row } from 'mdbreact';
import { connect } from 'react-redux';

class Profile extends React.Component {  
    render(){ 
        return(
          <div className="container-fluid">
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
              </div>
            </form>
        </div>
        );
    }
}
      
function mapStatetoProps({ auth }){
  return { auth }
} 

export default connect(mapStatetoProps)(Profile);                      