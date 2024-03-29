import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

//Styles
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.setState = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser}/> */}
        
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
