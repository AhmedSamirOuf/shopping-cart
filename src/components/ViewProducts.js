import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addToCart} from "../actions/cartActions";
import Cart from "./Cart";

class ViewProducts extends Component {
  addProductToCart = (id) => {
    debugger;
    this.props.addToCart(id);
    this.forceUpdate();
  };
  render() {
    let products = this.getProducts();
    return (
      <div className="container">
        <div className="box">
          {products}
        </div>
        <h3 className="center">Your cart</h3>
        <Cart/>
       </div>
    )
  }
  getProducts() {
    return this.props.products.map(product => {
      return (
        <div className="card" key={product.id}>
          <div className="image">
            <img src={product.image} alt={""}/>
          </div>
          <div className="content">
            {product.name} {product.category} - &#36;{product.price}{product.available ? ` x ${product.available}` : null}
          </div>
          <button
            id={`tshirt-${product.id}`}
            onClick={()=>this.addProductToCart(product.id)}
            disabled={product.available > 0 ? '' : 'disabled'}>
            {product.available > 0 ? 'Add to cart' : 'Sold Out'}
          </button>
        </div>)
    });
  }
}

const mapStateToProps = (state)=>{
  return {
    products: state.products,
    purchasedItems: state.purchasedItems
  }
};
const mapDispatchToProps= (dispatch)=>{
  return{
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ViewProducts)
