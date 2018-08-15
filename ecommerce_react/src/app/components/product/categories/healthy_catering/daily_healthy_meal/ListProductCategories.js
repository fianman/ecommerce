import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'mdbreact'

const ListProductCategories = (props) => {
    return(
        <div className="col-md-12">
        <br/><br/><br/><br/>
        <h3><strong>Product Categories</strong></h3>
            <ListGroup>
                <ListGroupItem className="brd-none"><a href="">Healty Catering</a><Badge color="primary" pill>14</Badge>
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Daily Healty Meal</a> <Badge color="primary" pill>24</Badge>
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Weight Loss Diet</a> <Badge color="primary" pill>25</Badge>
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Power Up Diet</a> <Badge color="primary" pill>26</Badge>
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Pregnancy</a> <Badge color="primary" pill>27</Badge>
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Events and Party</a> <Badge color="primary" pill>28</Badge>
                </ListGroupItem>
                <ListGroupItem className="brd-none"><a href="">Superfood</a><Badge color="primary" pill>2</Badge>
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Homemade</a> <Badge color="primary" pill>2</Badge>
                </ListGroupItem>
                
            </ListGroup>
        </div>
    );
};

export default ListProductCategories;