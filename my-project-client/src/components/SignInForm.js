import React from 'react'
import API from "../API"
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class SignInForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Send the data from the form to the server in order to authenticate the user
    API.signIn(this.state)
      // The server then responds with the username and a token generated from the user's id to confirm we've been authenticated successfully. We then use the signIn function passed down in props to set the state of username in App to be the username we've been sent back and store the token we've been sent back in localStorage
      .then(json => this.props.signIn(json.username, json.token, json.accounts)).then(() =>
      this.props.history.push('/overview')
        )
    }

  render() {
    return(
    <div className="signinform">
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Username</label>
                <input type="text" name="username" placeholder='username' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Password:</label>
                <input type="password" name="password" placeholder='password' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Button type='submit'>Submit</Button>
        </Form>
    </div>
    )
  }
}

export default withRouter(SignInForm)