import React from 'react'
import API from "../API"
import { Button, Form } from 'semantic-ui-react'


class SignUpForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: ""
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
    API.signUp(this.state)
  }

  render() {
    return(
    <div className="signinform">
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>First Name</label>
                <input type="text" name="first_name" placeholder='first_name' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Last Name</label>
                <input type="text" name="last_name" placeholder='last_name' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Username</label>
                <input type="text" name="username" placeholder='username' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Password</label>
                <input type="password" name="password" placeholder='password' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Email Address</label>
                <input type="text" name="email" placeholder='email' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Phone Number</label>
                <input type="text" name="phone_number" placeholder='phone_number' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Button type='submit'>Submit</Button>
        </Form>
    </div>
    )
  }
}

export default SignUpForm