import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './components/basics/Navbar';
import FormSearch from './components/basics/Search';
import MenuHome from './components/basics/Menu';
import Carousel from './components/basics/Carousel';
import Sections from './components/basics/Sections';
import Footer from './components/basics/Footer';
import Browse from './components/basics/Browse';
import FormGrid from './components/login/FormGrid';
import Media from './components/instagram/InstagramMedia';
import Subscription from './components/youtube/Subscription';
import FormForgot from './components/login/FormForgot';
import FormReset from './components/login/FormReset';
import FormProfile from './components/profile/Profile';
import FormDashboardProfile from './components/profile/DashboardProfile';
import FormDetailProfile from './components/profile/DetailProfile';
import FormMenuProfile from './components/profile/MenuProfile';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (     
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={FormSearch}/>
            <Route exact path="/" component={MenuHome}/>
            <Route exact path="/loginregis" component={FormGrid} />
            <Route exact path="/" component={Carousel} />
            <Route exact path="/" component={Sections} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/subscriptions" component={Subscription} />
            <Route exact path="/forgot" component={FormForgot} />
            <Route path="/reset/:token" component={FormReset} />
            <Route path="/profile" component={FormProfile} />
            <Route path="/dashboard_profile" component={FormDashboardProfile} />
            <Route path="/detail_profile" component={FormDetailProfile} />
            <Route path="/menu_profile" component={FormMenuProfile} />
            <Footer />
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
