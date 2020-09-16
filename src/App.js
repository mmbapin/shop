import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import HomeScreen from "./screen/HomeScreen";
import ProductDetails from "./screen/ProductDetails";
import ViewCart from "./screen/ViewCart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product-details" component={ProductDetails} exact />
        <Route path="/view-cart" component={ViewCart} exact />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
