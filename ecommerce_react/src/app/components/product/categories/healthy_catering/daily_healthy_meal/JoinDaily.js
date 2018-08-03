
import React from 'react';
import KidsMeal from './KidsMeal';
import LunchSehat from './LunchSehat';
import RamadhanPackage from './RamadhanPackage';
import {Row } from 'mdbreact';

class JoinDaily extends React.Component {
    render(){
        return(
        	
             <Row>
             	<KidsMeal />
             	<LunchSehat />
                <RamadhanPackage />
             </Row>
			
        );
    }
}
      
export default JoinDaily;
                      