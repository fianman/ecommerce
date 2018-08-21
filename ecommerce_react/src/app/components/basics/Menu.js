import React from 'react';
require('../../../assets/css/Menu.css');



class Menu extends React.Component {

  render() {
    return(
    <div className="container-fluid carousel slide carousel-fade menu-zidx">
      <ul className="nav nav-tabs nav-justified indigo" role="tablist">
          <li className="nav-item top">
              <a className="nav-link" data-toggle="tab" href="#panel5" role="tab"><i className="fa fa-user"></i> Healthy Catering</a>
              <ul >
                  <div><li><a href="/product/categories/healthy_catering/daily_healthy_meal">Daily Healthy Meal</a></li></div>
                  <div><li><a href="/product/categories/healthy_catering/weight_loss_diet">Weight Loss Diet</a></li></div>
                  <div><li><a href="/product/categories/healthy_catering/power_up_diet">Power Up Diet</a></li></div>
                  <div><li><a href="/product/categories/healthy_catering/pregnancy">Pregnancy</a></li></div>
                  <div><li><a href="/product/categories/healthy_catering/events_party">Events and party</a></li></div>
              </ul>
          </li>
          <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#panel6" role="tab"><i className="fa fa-heart"></i> Superfood</a>
              <ul>
                  <div><li><a href="/product/categories/superfood/homemade">Homemade</a></li></div>
              </ul>
          </li>
          
      </ul>


    </div>
    );
  }
}



export default Menu;
