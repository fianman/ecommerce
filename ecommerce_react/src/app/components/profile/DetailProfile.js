import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class DetailProfile extends React.Component {  
	
  componentDidMount(){
    this.props.fetchProfile();
  } 
  renderContent(){
   switch(this.props.profile){
        case null: return ''
        case false: return 'Hello, Guest'
        default:
          if(this.props.profile.user.username){       
          return <tr>
                  <td>#</td>
                  <td>{this.props.profile.user.username}</td>
                  <td>{this.props.profile.user.email}</td>
                  <td>{this.props.profile.customer.bank_account}</td>
                  <td>{this.props.profile.customer.phone}</td>
                  <td>{this.props.profile.customer.city}</td>
                  <td>{this.props.profile.customer.country}</td>
                 </tr>
          }
        }
    
  }

    render(){   
        return(
          <div className="container-fluid">
            Detail Profile
            <table className="table table-striped">
                <thead className="blue-grey lighten-4">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Bank Account</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderContent()}     
                </tbody>
            </table>
          </div>
        );
    }
}
      
function mapStatetoProps({ profile }){
  		return { profile }
} 
export default connect(mapStatetoProps,actions)(DetailProfile);                      