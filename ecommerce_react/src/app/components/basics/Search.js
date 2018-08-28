import React from 'react'
import { Container, Button } from 'mdbreact';

class FormSearch extends React.Component {

  render() {
    return(
      <Container className="container-fluid cntr-fluid">
        <form className="form-inline active-pink-4 mb-4 form-search">
          <input className="form-control form-control-sm mr-3 w-75 input-frmsearch" type="text" placeholder="Search" aria-label="Search" />

             <Button rounded type="submit" className="fa fa-search" aria-hidden="true"></Button>

        </form>
      </Container>
    )
  }
}

export default FormSearch
