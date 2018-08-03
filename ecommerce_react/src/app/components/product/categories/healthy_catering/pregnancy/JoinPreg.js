
import React from 'react';
import BumilProgram from './BumilProgram';
import BusuiProgram from './BusuiProgram';
import {Row } from 'mdbreact';

class JoinPreg extends React.Component {
    render(){
        return(
        	
             <Row>
             	<BumilProgram />
             	<BusuiProgram />
               
             </Row>
			
        );
    }
}
      
export default JoinPreg;
                      