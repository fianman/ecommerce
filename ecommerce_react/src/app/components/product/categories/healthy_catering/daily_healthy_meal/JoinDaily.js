
import React from 'react';
import {Row,Col } from 'mdbreact';
import KidsMeal from './KidsMeal';
import LunchSehat from './LunchSehat';
import FormSearch from './FormSearch';
import ListProduct from './ListProductCategories';

class JoinDaily extends React.Component {
    render(){
        return(
            <div className="container-fluid wrap-join">
             <Row className="row-join">
                <Col className="col-md-3">
                    <FormSearch/>
                    <ListProduct/>
                </Col>
                 <Col id="primary" className="col-md-9">
                    <div className="header">
                        <h3><strong>Daily Healthy Meal</strong></h3>
                        <p align="justify">Makan sehat sehari-hari dengan porsi normal berpedoman pada angka kecukupan gizi di Indonesia. Lunch Sehat untuk dewasa dan Kids Meal untuk anak 4 – 9 tahun.</p>
                    </div>
                    <form className="woocommerce-ordering" method="get">
                        <select name="orderby" className="orderby">
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by newness</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select>
                    </form>
                    <ul className="col-md-4 products">
                        <li className="product">
             	            <KidsMeal />
                        </li>
                        <li className="product">
             	            <LunchSehat />
                        </li>
                    </ul>
                   
                 </Col>       	
             </Row>
            </div>
        );
    }
}
      
export default JoinDaily;
                      