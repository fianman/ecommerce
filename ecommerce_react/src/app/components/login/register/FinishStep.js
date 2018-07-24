import React, { Component } from 'react'
import { Col, CardTitle, Input, Button } from 'mdbreact'

class FinishStep extends Component {
  render() {
    const data = this.props.data
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
