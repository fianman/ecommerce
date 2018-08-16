
import React from 'react';
import {Row,Col } from 'mdbreact';
import FormSearch from './daily_healthy_meal/FormSearch';
import ListProduct from './daily_healthy_meal/ListProductCategories';

class JoinDaily extends React.Component {
    render(){
        return(
            <div className="container-fluid wrap-join">
             <Row className="row-join">
                 <Col id="primary" className="col-md-12">
                    <div className="header">
                        <h3><strong>Healthy Catering</strong></h3>
                        <p align="justify">Pilih kategori makanan katering di bawah, sesuai dengan kebutuhan anda. Everyday untuk makan sehat setiap hari sesuai Angka Kecukupan Gizi, Lose Weight terdiri dari program katering 13 hari untuk menurunkan berat badan dengan makanan enak, Power Up terdiri dari program katering 13 hari makanan tinggi protein atau tinggi lemak (tanpa karbohidrat) untuk mencapai massa otot atau metabolisme ketogenik, Pregnancy bagi ibu hamil ibu menyusui, Special Event untuk katering acara spesial anda dimulai dari pemesanan min. 20 pax.</p>
                    </div>
                    <ul className="products">
                        <li className="product">
                            <a  href="#">
                                <img src="https://www.dietplus.id/wp-content/uploads/2017/11/catumb-everyday-300x300.jpg"></img>
                                <h2 className="title-list">Daily Healthy Meal (2)</h2>
                            </a>
                        </li>
                        <li className="product">
                            <a  href="#">
                                <img src="https://www.dietplus.id/wp-content/uploads/2017/11/catumb-lose-weight-300x300.jpg"></img>
                                <h2 className="title-list">Weight Loss Diet (2)</h2>
                            </a>
                        </li>
                        <li className="product">
                            <a  href="#">
                                <img src="https://www.dietplus.id/wp-content/uploads/2017/11/catumb-power-300x300.jpg"></img>
                                <h2 className="title-list">Power Up Diet (2)</h2>
                            </a>
                        </li>
                        <li className="product">
                            <a  href="#">
                                <img src="https://www.dietplus.id/wp-content/uploads/2017/11/catumb-pregnancy-300x300.jpg"></img>
                                <h2 className="title-list">Pregnancy (2)</h2>
                            </a>
                        </li>
                        <li className="product">
                            <a  href="#">
                                <img src="https://www.dietplus.id/wp-content/uploads/2017/11/catumb-special-event-300x300.jpg"></img>
                                <h2 className="title-list">Events and Party (2)</h2>
                            </a>
                        </li>
                    </ul>
                    <FormSearch/>
                    <ListProduct/>
                 </Col>       	
             </Row>
            </div>
        );
    }
}
      
export default JoinDaily;
                      