import React, { Component } from 'react';
import { connect } from 'react-redux'
class Cart extends Component {
  render() {
    let items=this.getItems();
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {items}
          </ul>
        </div>
      </div>
    )
  }

  getItems() {
    return this.props.purchasedItems.length ?
      (
        this.props.purchasedItems.map(item => {
          return (
            <div>
              <h5>{`item name:${item.name}`}</h5>
              <h5>{`item price :${item.price}$`}</h5>
              <h5>{`item quantity :${item.quantity}`}</h5>
            </div>
          )
        })
      ) :
      (
        <p>you haven't added items yet.</p>
      );
  }
}
const mapStateToProps = (state)=>{
  return {
    products:state.products,
    purchasedItems: state.purchasedItems
  }
};
export default connect(mapStateToProps)(Cart)
