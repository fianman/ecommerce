import React from 'react';
import { Row, Container, Nav, NavItem, NavLink } from 'mdbreact';
import classnames from 'classnames';
import TableAddInfo from './TableAddInfo';
import TableDes from './TableDes';

class TabDet extends React.Component {

    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeItem: '0'
      };
    }

    toggle(tab) {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    }
    render() {
      const tab = this.state.activeItem
      return (
        <Container className="container-fluid">
          <div className="col-md-12">
            <Row>
              <div classicTabs color="cyan">
                <Nav pills color="secondary" className="nav-justified ">
                    <NavItem>
                        <NavLink to="#" className={classnames({ active: this.state.activeItem === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                                ADDITIONAL INFORMATION
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#" className={classnames({ active: this.state.activeItem === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                                DESCRIPTION
                        </NavLink>
                    </NavItem>
                </Nav>
              </div>
            </Row>                              
                { tab === '1' && <TableAddInfo/> }
                { tab === '2' && <TableDes/> }              
          </div>
        </Container>
      );
    }
  }
  
  export default TabDet;