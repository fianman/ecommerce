import React from 'react';
import { connect } from 'react-redux';

class DetailProfile extends React.Component {  
    insertGreeting(){
      switch(this.props.auth){
        case null: return ''
        case false: return 'Hello, Guest'
        default:
          if (this.props.auth.username) {
            return 'Hello, ' + this.props.auth.username;
          }
          return 'Hello, Guest'
        }
    }
    
    render(){ 
        return(     
          <div className="container-fluid">
              <legend>{this.insertGreeting()}</legend>  (not {this.props.auth.username}? <a href="/auth/logout">Log out</a> )
          </div>
        );
    }
}

function mapStatetoProps({ auth }){
  return { auth }
} 

export default connect(mapStatetoProps)(DetailProfile);
                      