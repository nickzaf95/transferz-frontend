import React from 'react'
// import { Card } from 'semantic-ui-react'

class Card extends React.Component {
    render() {
        return (
                <div class="ui red fluid card">
                    <div class="content" size='big'><div class="header">{this.props.currency} {this.props.amount}</div></div>
                </div>
        )
    }

}

export default Card
