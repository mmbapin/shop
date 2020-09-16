import React from "react";
import formatCurrency from "../../../util";
import { connect } from "react-redux";
import { removeFromCart } from "../../../actions/CartAction";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <React.Fragment>
      {cartItems.length === 0 ? (
        <h1>No Product In Cart</h1>
      ) : (
        <div>
          {cartItems.map((prod, index) => (
            <div className="media cart__media" key={index}>
              <img className="mr-3 cart___img" src={prod.picture} alt="Prod" />

              <div className="media-body">
                <h5 className="mt-0">{prod.title}</h5>
                <div className="total__part">
                  {formatCurrency(prod.price)} x {prod.count}{" "}
                  <button
                    className="button"
                    onClick={() => removeFromCart(prod)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <div className="grand__total">
              SubTotal:{" "}
              {formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </div>
            <Link to="/view-cart">
              <button className="button">View Cart</button>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
