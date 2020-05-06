import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import API from '../API';
import { withRouter } from 'react-router-dom'
// Create a form to Transfer

class Transfer extends Component {

    constructor(props) {
        super()
        this.state = {
            currency: "",
            amount: 0,
            username: props.username,
            targetUser: ""
        }
      }

    handleTransfer = (e) => {
        e.preventDefault()
        API.transfer(this.state)
        .then(json => this.props.transferSuccess(json.accounts))
        .then(() => this.props.history.push('/overview'))

    }

    handleCheckChange = (e, {value}) => {
        e.preventDefault()
        this.setState({
            currency: value
        })
    }


    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="signinform">
                <h3>Please enter the details of your transfer</h3>
                <Form onSubmit={this.handleTransfer}>
                    <Form.Field>
                        <label>Recipient User</label>
                        <input type="text" name="targetUser" placeholder='targetUser' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Amount</label>
                        <input type="number" name="amount" placeholder='amount' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        Currency
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='eur'
                            name='checkboxRadioGroup'
                            value='eur'
                            checked={this.state.currency === 'eur'}
                            onChange={this.handleCheckChange}
                        />
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='usd'
                            name='checkboxRadioGroup'
                            value='usd'
                            checked={this.state.currency === 'usd'}
                            onChange={this.handleCheckChange}
                        />
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='gbp'
                            name='checkboxRadioGroup'
                            value='gbp'
                            checked={this.state.currency === 'gbp'}
                            onChange={this.handleCheckChange}
                        />
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='chf'
                            name='checkboxRadioGroup'
                            value='chf'
                            checked={this.state.currency === 'chf'}
                            onChange={this.handleCheckChange}
                        />
                    </Form.Field>
                    <br/>


                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Transfer)