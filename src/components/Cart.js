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
  placeOrder = (items) =>{
    console.log(items);
    const postData = {
      userId:1,
      items,
      total:this.props.total
    };
    fetch('http://localhost:5000/api/place-order', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    }).then(alert(
      "we have received your order, thank you"
    ))
  };
  render() {
    let items=this.getItems();
    return (
      <div>
        <div>
          <h5>You have ordered:</h5>
          <ul>
            {items}
          </ul>
          <h2>
            {`total cost :${this.props.total}$`}
          </h2>
          <button id={"place-order"} onClick={()=>{this.placeOrder(this.props.purchasedItems)}}>place order</button>
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
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
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
