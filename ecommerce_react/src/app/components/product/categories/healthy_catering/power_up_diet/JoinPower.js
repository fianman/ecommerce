
import React from 'react';
import FitnessDietProgram from './FitnessDietProgram';
import KetogenicDietProgram from './KetogenicDietProgram';
import {Row } from 'mdbreact';

class JoinPower extends React.Component {
    render(){
        return(
        	
             <Row>
             	<FitnessDietProgram />
             	<KetogenicDietProgram />
               
             </Row>
			
        );
    }
}
      
export default JoinPower;
                      