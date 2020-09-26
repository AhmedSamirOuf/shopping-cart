import {products} from "../DummyData";
import {ADD_TO_CART} from "../constants/actionTypes";

const initState={
  products,
  purchasedItems:[],
  total:0
};
const cartReducer= (state = initState,action)=>{
  debugger;
  if(action.type === ADD_TO_CART) {
    let purchasedItem = state.products.find(product => product.id === action.id);
    purchasedItem.available -=1;
    let existed_item = state.purchasedItems.find(product => action.id === product.id);
    if (existed_item) {
      purchasedItem.quantity += 1;
      return {
        ...state,
        total: state.total + purchasedItem.price
      }
    } else {
      purchasedItem.quantity = 1;
      let newTotal = state.total + purchasedItem.price;
      return {
        ...state,
        purchasedItems: [...state.purchasedItems, purchasedItem],
        total: newTotal
      }
    }
  }
  else{
    return state;
  }
};
export default cartReducer;
