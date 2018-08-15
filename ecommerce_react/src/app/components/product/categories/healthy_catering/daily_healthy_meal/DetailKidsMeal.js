import React from 'react';
import {Table,Input, Button, Container, Row, Col} from 'mdbreact';
import TabDet from './TabDet';
import ListProductCategories from './ListProductCategories';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
require('../../../../../../assets/css/DetailKidsMeal.css');

class DetailKidsMeal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radio3: false
        }
        this.onClick7 = this.onClick7.bind(this);
        this.onClick8 = this.onClick8.bind(this);
    }
    onClick7() {
        this.setState({radio3: 7});
    }   
    onClick8() {
        this.setState({radio3: 8});
    }
    componentDidMount() {
        let datePickerHr = document.querySelector('.datepicker-wrapper').getElementsByTagName('hr')[0];
        datePickerHr.style.border = "none";
    }
    render(){
        return(
            <Container className="container-fluid">
                <Row>
                    <Col className="col-md-9">
                        <Col className="col-md-4">
                            <img className="img-1" src="https://www.dietplus.id/wp-content/uploads/2017/08/kids-meal-20-1-100x100.jpg"/>
                        </Col>
                        <Col className="col-md-5 col-kids-5">
                            <h1>Kids Meal</h1>
                            <p><span>Rp</span>37.500</p>
                            <form className="form-ket" action="https://www.dietplus.id/shop/catering/daily-healthy-meal/kids-meal/">
                                <div className="Biaya-tembahan">
                                    <strong>Biaya tambahan (Optional):</strong>
                                    <br/>
                                    • Vegetarian +Rp. 200.000
                                    <br/>
                                    • Vegetarian +Rp. 200.000
                                    <br/>
                                    <br/>
                                    Gunakan koma jika lebih dari 1 bahan alergi, 
                                    <br/>
                                    contoh:
                                    <em>Susu, Ikan laut, Telur</em>
                                </div>
                                
                                <Table className="tbl-kids">
                                   
                                        <Row>
                                            <Col>Tgl Start*
                                            </Col>
                                            <Col>
                                                <div className="md-form dt">
                                                    <MuiThemeProvider>
                                                        <div className="datepicker-wrapper">
                                                            <DatePicker className="dt-picker" placeholder="Sesuai jadwal batch (required)" id="datepicker"></DatePicker>
                                                        </div>
                                                    </MuiThemeProvider>
                                                </div>
                                            </Col>
                                            
                                        </Row>
                                        <Row>
                                            <Col>Menu
                                            </Col>
                                            <Col className="ps-opt">
                                               <input onClick={this.onClick7} checked={this.state.radio3 === 7 ? true : false} type="radio" id="radio7" /> Reguler &nbsp;&nbsp;&nbsp;&nbsp;
                                               <input onClick={this.onClick8} checked={this.state.radio3 === 8 ? true : false} type="radio" id="radio8" /> Vegetarian 
                                            </Col>     
                                        </Row>
                                        <Row>
                                            <Col className="qty-wdth"><Input data-toggle="tooltip" data-placement="bottom" title="Enter Quantity" type="number" name="qty"/></Col>
                                            <Col className="qty-wdth-btn"><Button color="warning">ADD TO CART</Button></Col>
                                        </Row>
                                    
                                </Table>
                                
                            </form>
                        </Col>
                    </Col>
                    <TabDet/>
                    <ListProductCategories/>
                </Row>
                
            </Container>
        );
    }
}

export default DetailKidsMeal;