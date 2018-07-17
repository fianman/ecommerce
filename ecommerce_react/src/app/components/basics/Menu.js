import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TabPane, TabContent, Nav, NavItem, NavLink, Row, Col, Container } from 'mdbreact';
import classnames from 'classnames';

class Menu extends React.Component {

  render() {
    return(
    <div className="container-fluid cntr-fluid">
      <ul className="nav nav-tabs nav-justified indigo" role="tablist">
          <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#panel5" role="tab"><i className="fa fa-user"></i> Profile</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#panel6" role="tab"><i className="fa fa-heart"></i> Follow</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#panel7" role="tab"><i className="fa fa-envelope"></i> Mail</a>
          </li>
      </ul>

      <div className="tab-content">   
        <div className="tab-pane fade in show active" id="panel5" role="tabpanel">
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
        </div>    
        <div className="tab-pane fade" id="panel6" role="tabpanel">
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
        </div>       
        <div className="tab-pane fade" id="panel7" role="tabpanel">
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
        </div>
   
      </div>
    </div>
    );
  }
}


export default Menu;

