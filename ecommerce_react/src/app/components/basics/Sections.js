import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip } from 'mdbreact';

class EcommercePage extends Component {
  render() {
    return(
      
      <Container className="container-fluid">
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Denim</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Denim trousers</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-o"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>49$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" className="active" componentClass="fa fa-heart ml-3" tooltipContent="Added to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Shoes</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">High heels</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>89$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Outwear</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Brown coat</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-half-full"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>59$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-heart grey-text ml-3" tooltipContent="Add to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-4">
              <Card cascade narrow ecommerce>
                <CardImage src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg" top alt="sample photo" overlay="white-slight" />
                <CardBody className="text-center">
                  <a href="" className="grey-text">
                    <h5>Blouses</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">Shirt</a>
                    </strong>
                  </CardTitle>
                  <ul className="rating">
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star"></Fa>
                    </li>
                    <li>
                      <Fa icon="star-o"></Fa>
                    </li>
                  </ul>
                  <CardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</CardText>
                  <CardFooter className="px-1">
                    <span className="float-left font-weight-bold">
                      <strong>119$</strong>
                    </span>
                    <span className="float-right">
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-shopping-cart grey-text ml-3" tooltipContent="Add to cart"/>
                      <Tooltip placement="top" tag="a" component="i" componentClass="fa fa-share-alt grey-text ml-3" tooltipContent="Share"/>
                      <Tooltip placement="top" tag="a" component="i" className="active" componentClass="fa fa-heart ml-3" tooltipContent="Added to watchlist"/>
                    </span>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
        <div className="siteorigin-panels-stretch ">
          <div id="pgc-50-4-0" className="panel-grid-cell">
              <div id="panel-50-4-0-0" className="so-panel">
                  <div id="txt-pos">
                    <h3 className="widget-title"> How it Works</h3>
                    <div className="garis-how"> </div>
                  </div>
              </div>
              <div id="panel-50-4-0-1" className="so-panel">
                <div id="txt-pos2">
                    <div className="so-widget">
                      <div className="sow-features-list">
                        <div className="sow-features-feature">
                          <div className="sow-icon-container">
                              <div className="sow-icon-image"></div>
                          </div>
                          <div className="textwidget section-work">
                            <h5 className="txt-pic">1. Register On Batch Schedule</h5>
                          </div>
                        </div>
                        <div className="sow-features-feature2">
                          <div className="sow-icon-container2">
                              <div className="sow-icon-image2"></div>
                          </div>
                          <div className="textwidget2 section-work">
                            <h5 className="txt-pic2">2. We Cook and Deliver Everday</h5>
                          </div>
                        </div>
                        <div className="sow-features-feature3">
                          <div className="sow-icon-container3">
                              <div className="sow-icon-image3"></div>
                          </div>
                          <div className="textwidget3 section-work">
                            <h5 className="txt-pic3">3. Heat and Enjoy</h5>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                </div>
              </div>
          </div>
          
          
      </div>
      </Container>
        
    );
  };
}

export default EcommercePage;


            