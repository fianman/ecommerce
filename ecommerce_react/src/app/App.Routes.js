import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './components/basics/Navbar';
import FormSearch from './components/basics/Search';
import Breadcrumbs from './components/basics/Breadcrumbs';
import MenuHome from './components/basics/Menu';
import Carousel from './components/basics/Carousel';
import Sections from './components/basics/Sections';
import Footer from './components/basics/Footer';
import Browse from './components/basics/Browse';
import Profile from './components/basics/Profile';
import FormLogin from './components/login/FormLogin';
import FormRegister from './components/login/register/FormRegister';
import Media from './components/instagram/InstagramMedia';
import Subscription from './components/youtube/Subscription';
import Payment from './components/payment/Payment';
import Success from './components/payment/Success';
import Unfinished from './components/payment/Unfinished';
import Failed from './components/payment/Failed';
import FormForgot from './components/login/FormForgot';
import FormReset from './components/login/FormReset';
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
            <Route path="" component={Breadcrumbs}/>
            <Route exact path="/" component={FormSearch}/>
            <Route exact path="/" component={MenuHome}/>
            <Route exact path="/login" component={FormLogin} />
            <Route exact path="/register" component={FormRegister} />
            <Route exact path="/" component={Carousel} />
            <Route exact path="/" component={Sections} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/subscriptions" component={Subscription} />
            <Route exact path="/forgot" component={FormForgot} />
            <Route path="/reset/:token" component={FormReset} />
            <Route path="/dashboard_profile" component={FormDashboardProfile} />
            <Route path="/detail_profile" component={FormDetailProfile} />
            <Route path="/menu_profile" component={FormMenuProfile} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/payment/success" component={Success} />
            <Route exact path="/payment/unfinished" component={Unfinished} />
            <Route exact path="/payment/failed" component={Failed} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
