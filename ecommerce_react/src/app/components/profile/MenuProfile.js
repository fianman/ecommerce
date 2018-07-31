import React from 'react';
import { Row, Col,ListGroup, ListGroupItem} from 'mdbreact';
import classnames from 'classnames';
import axios from 'axios';
import { connect } from 'react-redux';
import Dashboard from './DashboardProfile';
import DetailProfile from './DetailProfile';

<<<<<<< HEAD
=======

>>>>>>> 4a2147633cc929b2d66fb910073d0c56e67b0290
class MenuProfile extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: '1'
    };
  }
<<<<<<< HEAD
  async componentWillMount() {
=======

  async componentWillMount() { // back to login
>>>>>>> 4a2147633cc929b2d66fb910073d0c56e67b0290
    try {
      await axios.get("/api/current_profile")
    } catch (e) {
      if (e.response.status === 401) {
        this.props.history.replace('/login',true)
      }
    }
  }

  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  render(){
    const tab = this.state.activeItem;
    return(
      <div className="container-fluid">
        <Row>
          <Col classnames="col-md-4">
            <legend>My Account</legend>
          </Col>
        </Row>
        <Row>
          <Col classnames="col-md-3" id="listGroup-menu">
              <ListGroup>
                  <ListGroupItem
                    className={classnames({ active: this.state.activeItem === '1' })}
                    onClick={() => { this.toggle('1'); }}>Dashboard
                  </ListGroupItem>
                  <ListGroupItem
                    className={classnames({ active: this.state.activeItem === '2' })}
                    onClick={() => { this.toggle('2'); }}>Detail
                  </ListGroupItem>
                  <ListGroupItem href="/auth/logout">Logout</ListGroupItem>
              </ListGroup>
          </Col>
          <Col className="col-md-9">
            { tab === '1' && <Dashboard/> }
            { tab === '2' && <DetailProfile/> }
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStatetoProps({ auth }){
  return { auth }
}

export default connect(mapStatetoProps)(MenuProfile);
