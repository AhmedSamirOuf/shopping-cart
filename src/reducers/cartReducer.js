import {products} from "../DummyData";
import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY} from "../constants/actionTypes";

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
  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.purchasedItems.find(item=> action.id === item.id);
    let new_items = state.purchasedItems.filter(item=> action.id !== item.id);
    let newTotal = state.total - (itemToRemove.price * itemToRemove.available );
    return{
      ...state,
      purchasedItems: new_items,
      total: newTotal
    }
  }
  if(action.type=== SUB_QUANTITY){
    let addedItem = state.products.find(item=> item.id === action.id);
    addedItem.available += 1;
    if(addedItem.quantity === 1){
      let new_items = state.purchasedItems.filter(item=>item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return{
        ...state,
        purchasedItems: new_items,
        total: newTotal > 0 ? newTotal:0
      }
    }
    else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return{
        ...state,
        total: newTotal > 0 ? newTotal:0
      }
    }

  }
  else{
    return state;
  }
};
export default cartReducer;
