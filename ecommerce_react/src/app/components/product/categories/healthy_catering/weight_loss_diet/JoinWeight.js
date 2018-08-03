
import React from 'react';
import AtkinsDietProgram from './AtkinsDietProgram';
import MayoDietProgram from './MayoDietProgram';
import {Row } from 'mdbreact';

class JoinWeight extends React.Component {
    render(){
        return(
        	
             <Row>
             	<AtkinsDietProgram />
             	<MayoDietProgram />
               
             </Row>
			
        );
    }
}
      
export default JoinWeight;
                      