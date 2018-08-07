import React from 'react';
import {Row, FormInline, Button, Input } from 'mdbreact';


class FormSearch extends React.Component {
    render(){
        return(
            <FormInline className="md-form mr-auto mb-9">
                <Input className="form-control mr-sm-2" type="text" placeholder="Search products..." aria-label="Search" />
                <Button color="warning">Warning</Button>
            </FormInline>
        );
    }
}
  
export default FormSearch;
                  