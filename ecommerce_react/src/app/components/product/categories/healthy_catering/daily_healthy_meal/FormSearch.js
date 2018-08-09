import React from 'react';
import { Button } from 'mdbreact';


class FormSearch extends React.Component {
    render(){
        return(
            <form>
                <input className="form-control" type="text" placeholder="Search products..." aria-label="Search" />
                <Button color="warning">Search</Button>
            </form>
        );
    }
}
  
export default FormSearch;
                  