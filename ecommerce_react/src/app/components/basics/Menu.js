import React from 'react';
require('../../../assets/css/basics/Menu.css');

class Menu extends React.Component {

  render() {
    return(
    <div className="container-fluid cntr-fluid">
      <ul className="nav nav-tabs nav-justified indigo" role="tablist">
          <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#panel5" role="tab"><i className="fa fa-user"></i> Profile</a>
              <ul >
                  <div><li><a href="">Link a</a></li></div>
                  <div><li><a href="">Link b</a></li></div>
                  <div><li><a href="">Link c</a></li></div>
              </ul>
          </li>
          <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#panel6" role="tab"><i className="fa fa-heart"></i> Follow</a>
              <ul>
                  <div><li><a href="">Link d</a></li></div>
                  <div><li><a href="">Link e</a></li></div>
                  <div><li><a href="">Link f</a></li></div>
              </ul>
          </li>
          <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#panel7" role="tab"><i className="fa fa-envelope"></i> Mail</a>
              <ul>
                  <div><li><a href="">Link g</a></li></div>
                  <div><li><a href="">Link h</a></li></div>
                  <div><li><a href="">Link i</a></li></div>
              </ul>
          </li>
      </ul>


    </div>
    );
  }
}



export default Menu;
