import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/home.page';
import ShopPage from './pages/shop/shop.page';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.page';
import { auth, createUserProfile } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          })
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
