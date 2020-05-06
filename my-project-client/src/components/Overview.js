import React, { Component } from 'react';
import Card from './Card.js'


class Overview extends Component {

    render() {
        return (
            <div className="account">
                <div class="ui cards" size='big'>
                    { this.props.accounts.map( account => <Card currency={account.currency} amount={account.amount} />)}
                </div>
            </div>
        )
    }
}

export default Overview