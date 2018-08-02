import React from 'react';
import { RingLoader } from 'react-spinners';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Navbar, FormSearch, Breadcrumbs, Menu, CarouselPage,
  Sections, Footer, Browse, Profile } from './components/basics';
import { FormLogin, FormRegister, FormForgot, FormReset } from './components/login'
import { Payment, Success, Unfinished, Failed } from './components/payment'
import Media from './components/instagram/InstagramMedia';
import Subscription from './components/youtube/Subscription';
import FormMenuProfile from './components/profile/MenuProfile';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  redirectLogin(component) {
    switch (this.props.auth) {
      case null: return <RingLoader />
      case false: return <Redirect to='/login' />
      default: return component
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="" component={Breadcrumbs}/>
            <Route exact path="/" component={FormSearch}/>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/login" component={FormLogin} />
            <Route exact path="/register" component={FormRegister} />
            <Route exact path="/" component={CarouselPage} />
            <Route exact path="/" component={Sections} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/media" render={() => {
                return this.redirectLogin(<Media />)
              }} />
            <Route exact path="/subscriptions" component={Subscription} />
            <Route exact path="/forgot" component={FormForgot} />
            <Route path="/reset/:token" component={FormReset} />
            <Route path="/menu_profile" render={() => {
                return this.redirectLogin(<FormMenuProfile />)
              }} />
            <Route exact path="/payment" render={() => {
                return this.redirectLogin(<Payment />)
              }} />
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

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(App);
