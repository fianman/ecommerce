import React from 'react';
import { Row, Col,ListGroup, ListGroupItem, Container} from 'mdbreact';
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
        <Container>
          <div className="col-md-9">

            <Row>  
              <ListGroupItem
                className={classnames({ active: this.state.activeItem === '1' })}
                onClick={() => { this.toggle('1'); }}>ADDITIONAL INFORMATION
              </ListGroupItem>
              <ListGroupItem
                className={classnames({ active: this.state.activeItem === '2' })}
                onClick={() => { this.toggle('2'); }}>DESCRIPTION
              </ListGroupItem>
            </Row>   
            <Row>   
            
            { tab === '1' && <TableAddInfo/> }
            { tab === '2' && <TableDes/> }
            </Row>
          </div>
        </Container>
      );
    }
  }
  
  export default TabDet;