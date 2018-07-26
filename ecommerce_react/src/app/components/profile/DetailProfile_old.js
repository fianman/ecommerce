import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Fa } from 'mdbreact';
import $ from 'jquery/dist/jquery.js';
import jsPDF from 'jspdf/dist/jspdf.min.js';


class DetailProfile extends React.Component {
  constructor(props){
    super(props);
    this.pdfToHTML=this.pdfToHTML.bind(this);
  }

  componentDidMount(){
    this.props.fetchProfile();
  }

  renderContent(){
   switch(this.props.profile){
        case null: return ''
        case false: return 'Hello, Guest'
        default:
          if(this.props.profile.user){
          return <tr>
                  <td>#</td>
                  <td>{this.props.profile.user.username}</td>
                  <td>{this.props.profile.user.email}</td>
                  <td>{this.props.profile.customer.bank_account}</td>
                  <td>{this.props.profile.customer.phone}</td>
                  <td>{this.props.profile.customer.city}</td>
                  <td>{this.props.profile.customer.country}</td>
                  <td><Fa id="btn_dp" onClick={this.pdfToHTML} className="ml-1" icon="print"/></td>
                 </tr>
          }
        }

  }

  pdfToHTML(){
      var pdf = new jsPDF('p', 'pt', 'a4');
      var source = $('#tbl_dp')[0];
      var specialElementHandlers = {                    
        '#bypassme': function(element, renderer) {
          return true
        }
      }

      var margins = {
          top: 50,
          left: 30,
          width: 1000
      };

      pdf.fromHTML (
          source // HTML string or DOM elem ref.
          , margins.left // x coord
          , margins.top // y coord
          , {
              'width': margins.width // max width of content on PDF
              , 'elementHandlers': specialElementHandlers
            },
          function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            // this allow the insertion of new lines after html
            pdf.save('detail-profile.pdf');
          },margins
        )

    };


    render(){
      console.log('ba :', this.props);
        return(
          <div className="container-fluid overflow-div"id="tbl_dp">
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
                         <th></th>
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
