import React, { Component } from 'react'
import { Col, CardTitle, Input, Button } from 'mdbreact'

class FinishStep extends Component {
  render() {
    const data = this.props.data;
    console.log('data finish :', data);
    return(
      <div className="container-fluid">
        <h3 className="font-weight-bold pl-0 my-4"><strong>Your Account</strong></h3>
        <Col className="col-md-12">
          <CardTitle>
          <form method="post" action="/auth/register">
            <Input readOnly name="username" label="Username" value={data.username}/>
            <Input readOnly name="email" label="Email" type="email" value={data.email}/>
            <Input readOnly name="password" label="Password" type="password" value={data.password}/>
            <Input readOnly name="first_name" label="First Name" value={data.first_name}/>
            <Input readOnly name="last_name" label="Last Name" value={data.last_name}/>
            <Input readOnly name="phone" label="Phone" value={data.phone}/>
            <Input readOnly name="bank_account" label="Bank Account" value={data.bank_account}/>
            <Input readOnly name="address1" label="Address 1" value={data.address1}/>
            <Input readOnly name="address2" label="Address 2" value={data.address2}/>
            <Input readOnly name="address3" label="Address 3" value={data.address3}/>
            <Input readOnly name="address4" label="Address 4" value={data.address4}/>
            <Input readOnly name="street" label="Street" value={data.street}/>
            <Input readOnly name="city" label="City" value={data.city}/>
            <Input readOnly name="states" label="State" value={data.states}/>
            <Input readOnly name="country" label="Country" value={data.country}/>
            <Input readOnly name="hanya_mau" label="Option 1" value={data.hanya_mau}/>
            <Input readOnly name="tidak_mau" label="Option 2" value={data.tidak_mau}/>
            <Input readOnly name="sakit" label="Option 3" value={data.sakit}/>
            <Input readOnly name="vegetarian" label="Option 4" value={data.vegetarian}/>
            <div className="text-center">
                <Button type="submit" color="deep-orange">Submit</Button>
            </div>
          </form>
          </CardTitle>
        </Col>
      </div>
    )
  }
}

export default FinishStep
