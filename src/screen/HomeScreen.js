import React, { Fragment } from "react";
import ProductList from "../components/layout/ProductList";
import Cart from "../components/layout/Cart";
import Filter from "../components/common/Filter";
import Header from "../components/layout/Header";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8">
              <Filter />
              <ProductList />
            </div>
            <div className="col-xl-4">
              <h3>Cart</h3>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
