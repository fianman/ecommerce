
import React from 'react';
import GroupPackage from './GroupPackage';
import KidsPartyPackage from './KidsPartyPackage';
import {Row } from 'mdbreact';

class JoinEvents extends React.Component {
    render(){
        return(
        	
             <Row>
             	<GroupPackage />
             	<KidsPartyPackage />
               
             </Row>
			
        );
    }
}
      
export default JoinEvents;
                      