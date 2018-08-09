import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker'
import {Row, Container, Table, Col, Fa, Input } from 'mdbreact';
import TabDet from './TabDet';
require('../../../../../../assets/css/DetailKidsMeal.css');

class DetailKidsMeal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          radio: false
        }
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);

    }
    componenColidMount() {
        let datePickerHr = document.querySelector('.datepicker-wrapper').getElementsByTagName('hr')[0];
        datePickerHr.style.border = "none";
    }
    onClick1() {
        this.setState({radio: 1});
    }
    
    onClick2() {
        this.setState({radio: 2});
    }
    
    render(){
        return(        	
            <Container className="content-wrapper container">
                <div id="content" className="page-wrap">
                    <Row>
                        <div id="primary" className="col-md-9">
                            <div id="main" className="site-main">
                                <div id="product-1300" className="post-1300">
                                    <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images">
                                        <div className="flex-viewport">
                                            <div className="woocommerce-product-gallery__wrapper">
                                                <div className="woocommerce-product-gallery__image flex-active-slide">
                                                    <a href="https://www.dietplus.id/wp-content/uploads/2017/08/kids-meal-20-1.jpg">
                                                        <img className="img-1" src="https://www.dietplus.id/wp-content/uploads/2017/08/kids-meal-20-1-230x230.jpg 230w, https://www.dietplus.id/wp-content/uploads/2017/08/kids-meal-20-1-350x350.jpg 350w, https://www.dietplus.id/wp-content/uploads/2017/08/kids-meal-20-1-480x480.jpg 480w"></img>
                                                    </a>
                                                </div>
                                                <div className="woocommerce-product-gallery__image">
                                                    <a href="https://www.dietplus.id/wp-content/uploads/2017/08/product-kids-meal-1_.jpg">
                                                        <img src="https://www.dietplus.id/wp-content/uploads/2017/08/product-kids-meal-1_-600x600.jpg">
                                                        </img>
                                                    </a>
                                                </div>
                                            </div>
                                            <ol className="flex-control-nav flex-control-thumbs">
                                                <li>
                                                    <img src="https://www.dietplus.id/wp-content/uploads/2017/08/kids-meal-20-1-100x100.jpg"></img>
                                                </li>
                                                <li>
                                                    <img src="https://www.dietplus.id/wp-content/uploads/2017/08/product-kids-meal-1_-100x100.jpg"></img>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="summary entry-summary">
                                            <h1 className="product_title entry-title">Kids Meal</h1>
                                            <p className="price">
                                                <span className="woocommerce-Price-amount amount">
                                                    <span className="woocommerce-Price-currencySymbol">Rp</span>37.500
                                                </span>
                                            </p>
                                            <form className="cart" action="https://www.dietplus.id/shop/catering/daily-healthy-meal/kids-meal/" method="post" enctype="multipart/form-data">
                                                <div className="wccpf-fields-group-1">
                                                    <div className="wcff-label  wcff-label-info">
                                                        <strong>Biaya tambahan (Optional):</strong>
                                                        <br/>
                                                        • Vegetarian +Rp. 200.000
                                                        <br/>
                                                        • Alergi +Rp. 100.000 / item
                                                        <br/>
                                                        <br/>
                                                        Gunakan koma jika lebih dari 1 bahan alergi, 
                                                        <br/>
                                                        contoh: 
                                                        <em>Susu, Ikan laut, Telur</em>
                                                    </div>
                                                    <Table className="wccpf_fields_Table  tgl_start-wrapper">
                                                        <tbody>
                                                            <tr>
                                                                <Col className="wccpf_label">
                                                                    <label htmlFor="tgl_start">
                                                                        Tgl Start
                                                                        <span>*</span>
                                                                    </label>
                                                                </Col>
                                                                <Col className="wccpf_value">
                                                                    <div className="md-form">
                                                                        <MuiThemeProvider>
                                                                        <div className="datepicker-wrapper">
                                                                            <DatePicker style={{borderBottom: '1px solid #bdbdbd', height: '3rem'}} id="datepicker" textFieldStyle={{width: '100%'}} hintText="Selected date" ></DatePicker>
                                                                        </div>
                                                                        </MuiThemeProvider>
                                                                    </div>
                                                                </Col>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="wccpf_fields_Table  menu-wrapper">
                                                    <tbody>
                                                        <tr>
                                                            <Col className="wccpf_label">
                                                                <label htmlFor="Menu">
                                                                    Tgl Start
                                                                
                                                                </label>
                                                            </Col>
                                                            <Col className="wccpf_value">
                                                            <div>
                                                                <Input onClick={this.onClick1} checked={this.state.radio === 1 ? true : false} label="Reguler" type="radio" id="radio1" />
                                                                <Input onClick={this.onClick2} checked={this.state.radio === 2 ? true : false} label="Vegetarian" type="radio" id="radio2" />
                                                                
                                                            </div>
                                                            </Col>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                    <Table className="wccpf_fields_Table  alergi_optional-wrapper">
                                                        <tbody>
                                                            <tr>
                                                                <Col className="wccpf_label">
                                                                    <label htmlFor="alergi_optional">Alergi (Optional)</label>
                                                                </Col>
                                                                <Col className="wccpf_value">
                                                                    <Input name="alergi_optional"
                                                                    group type="text"
                                                                    placeholder="Contoh: susu, keju dan ikan laut"
                                                                     />
                                                                </Col>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                                <div className="quantity">
                                                    <Col className="wccpf_label">
                                                        <Input name="qty"
                                                        group type="number"
                                                        className="input-text qty text"
                                                            />
                                                    </Col>
                                                    <Col className="wccpf_value">
                                                    <button type="submit" class="btn btn-so"><i class="fa fa-stack-overflow left"></i> ADD TO CART</button>
                                                    </Col>
                                                </div>
                                            </form>
                                            <div className="product_meta">
                                                <span className="sku_wrapper">SKU:<span className="sku">HC06</span></span>
                                                <span className="posted_in">Category:<a href="https://www.dietplus.id/product-category/catering/daily-healthy-meal/" rel="tag">Daily Healthy Meal</a></span>
                                            </div>
                                            <div className="woocommerce-tabs wc-tabs-wrapper">
                                                <TabDet/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
			
        )
    }
}
      
export default DetailKidsMeal;
                      