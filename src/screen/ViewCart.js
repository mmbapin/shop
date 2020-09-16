import React from "react";
import { connect } from "react-redux";
import formatCurrency from "../util";
import { removeFromCart } from "../actions/CartAction";

const ViewCart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>View Cart</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Pictur</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {!cartItems ? (
              <h1>No Product</h1>
            ) : (
              cartItems.map((prod, index) => (
                <tr key={index}>
                  <th scope="row">
                    <button
                      className="button"
                      onClick={() => removeFromCart(prod)}
                    >
                      X
                    </button>
                  </th>
                  <td>
                    <img
                      className="view__cartImg"
                      src={prod.picture}
                      alt="details"
                    />
                  </td>
                  <td>{prod.title}</td>
                  <td>{prod.price}</td>
                  <td>{prod.count}</td>
                  <td>{formatCurrency(prod.price * prod.count)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "center" }}>
        <h5>Grand Total</h5>
        <p>
          {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(ViewCart);
