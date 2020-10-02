import React, { Component } from 'react';
import { connect } from 'react-redux'
import {removeItem, subtractQuantity} from "../actions/cartActions";
class Cart extends Component {

  decrease = (id) => {
    this.props.subtractQuantity(id);
    this.forceUpdate();
  };
  delete = (id) => {
    this.props.removeItem(id);
    this.forceUpdate();
  };
  render() {
    let items=this.getItems();
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {items}
          </ul>
          <h2>
            {`total cost :${this.props.total}$`}
          </h2>
        </div>
      </div>
    )
  }

  getItems() {
    return this.props.purchasedItems.length ?
      (
        this.props.purchasedItems.map(item => {
          return (
            <li className="collection-item avatar" key={item.id}>
              <div className="item-desc">
                <span className="title">{item.name}</span>
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <button id={"sub-quantity"} onClick={()=>{this.decrease(item.id)}}>-</button>
                <button id={"remove-item"} onClick={()=>{this.delete(item.id)}}>Remove</button>
              </div>
              <hr/>
            </li>
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
    total:state.total,
    purchasedItems: state.purchasedItems

  }
};
const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
