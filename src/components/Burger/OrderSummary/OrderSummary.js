import React, { Component } from 'react'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
   
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey} </span>   : {this.props.ingredients[igKey]}
            </li>
            );
        });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h5>Total price : {this.props.price.toFixed(2)}</h5>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel </Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        )
    }
    
}

export default OrderSummary;