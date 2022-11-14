import "./App.css";
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, updateCart] = useState([]);
  const [total, updateTotal] = useState(0);
  const cartDict = new Map();
  function addTotal(item) {
    updateTotal(total + item.price)
  }

  function addCart(item) {
    updateCart([...cart, item]);

    if (cartDict.has(item)) {
      let value = cartDict.get(item);
      value += 1;
      cartDict.set(item, value)
    } else {
      cartDict.put(item, 1);
    }
  }

  const handleClick = (item) => {
    addTotal(item)
    addCart(item)
  }
  return (
    <div className="App">
      <div className="Bakery">
        <div className="BakeryItem">
          <h1>Jason's Bakery</h1>
          {bakeryData.map((item, index) => (
            <BakeryItem index={index} item={item} handleClick={handleClick}></BakeryItem>
          ))}

        </div>
        <div className="Cart">
          <h2>Cart</h2>
          <p>Total: {total}</p>
          <p>Cart Contents</p>
          {cart.map((item, index) => (
            
            <p>{item.name}</p>
          ))}
          {/* <div>
            for (let [item, count] of  Object.entries(cartDict)) {
              <p>{this.item} {this.count}</p>
            }
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
