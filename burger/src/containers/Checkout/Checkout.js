import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

//ROUTING was here
  // componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     //['salad', '1']
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ingredients: ingredients, totalPrice: price});
  // }

  onCheckoutCancelled = () => {
    this.props.history.goBack();
  }

  onCheckoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render () {
    let summary = <Redirect to="/" />
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
                  ingredients={this.props.ings}
                  onCheckoutCancelled={this.onCheckoutCancelled}
                  onCheckoutContinued={this.onCheckoutContinued} />
          <Route
            path={this.props.match.path + '/contact-data'}
            //ROUTING was here
            // render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props}/>)}
            component={ContactData}
          />
        </div>
        );
    }
    return summary;
  }
}

const mapStateToPros = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToPros)(Checkout);
