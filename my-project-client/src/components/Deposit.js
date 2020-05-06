import React, { Component } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import API from '../API';
import { withRouter } from 'react-router-dom'
// Create a form to deposit

class Deposit extends Component {

    constructor(props) {
        super()
        this.state = {
            currency: "",
            amount: 0,
            username: props.username
        }
      }

    handleDeposit = (e) => {
        e.preventDefault()
        API.deposit(this.state)
        .then(json => this.props.depositSuccess(json.accounts))
        .then(() => this.props.history.push('/overview'))

    }

    handleCheckChange = (e, {value}) => {
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
                <h3>Please enter the details of your deposit</h3>
                <Form onSubmit={this.handleDeposit}>
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

export default withRouter(Deposit)