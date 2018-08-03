
import React from 'react';
import BasoAyamOrganik from './BasoAyamOrganik';
import SosisAyamOrganik from './SosisAyamOrganik';
import {Row } from 'mdbreact';

class JoinHome extends React.Component {
    render(){
        return(
        	
             <Row>
             	<BasoAyamOrganik />
             	<SosisAyamOrganik />
               
             </Row>
			
        );
    }
}
      
export default JoinHome;
                      