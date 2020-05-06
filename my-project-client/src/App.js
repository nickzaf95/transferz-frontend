import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Overview from './components/Overview'
import API from './API';
import SignInForm from './components/SignInForm'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import Transfer from './components/Transfer'

// For accounts get pass in all the accounts in sign in to the state
// Pass the state to all the components
// Map over them and pass each one to a 'card' component
// Render the card

// Do styling at the END

class App extends React.Component {
  state = {
    username: null,
    accounts: []
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate (localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token))
    }
  }

  signIn = (username, token, accounts) => {
    // Set the state of username to be the username the server sent back
    this.setState({
      username: username,
      accounts: accounts
    })
    // Store the token the server sent back in localStorage, which is on the client-side
    localStorage.token = token
  }

  deposit = (accounts) => {
    this.setState({
      accounts: accounts
    })
  }

  withdraw = (accounts) => {
    this.setState({
      accounts: accounts
    })
  }

  transfer = (accounts) => {
    this.setState({
      accounts: accounts
    })
  }

  // Sign the user out by setting the username to null and removing the token key from localStorage
  signOut = () => {
    this.setState({
      username: null,
      accounts: []
    })
    localStorage.removeItem("token")
  }

  

  render() {
    return (
      <Router>
          <NavBar username={this.state.username} signOut={this.signOut}/>
          { this.state.username ? <h1>Welcome back, {this.state.username}</h1> : <h1>Welcome to Transferz!</h1> }
          <Route exact path="/sign-in" component={() => <SignInForm signIn={this.signIn}/>}/>
          <Route exact path="/overview" component={() => <Overview accounts={this.state.accounts} username={this.state.username} /> } />
          <Route exact path="/deposit" component={() => <Deposit username={this.state.username} depositSuccess={this.deposit}/>} />
          <Route exact path="/withdraw" component={() => <Withdraw username={this.state.username} withdrawalSuccess={this.withdraw}/>} />
          <Route exact path="/transfer" component={() => <Transfer username={this.state.username} transferSuccess={this.transfer}/>} />

      </Router>
    );
  }
}

export default App;

