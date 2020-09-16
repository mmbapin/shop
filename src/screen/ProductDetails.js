import React from "react";
import { connect } from "react-redux";
import formatCurrency from "../util";
// import { detailsProd } from "../actions/CartAction";

const ProductDetails = ({ itemDetails }) => {
  return (
    <div>
      <div className="media">
        <img className="mr-3" src={itemDetails.picture} alt="details" />
        <div className="media-body">
          <h5 className="mt-0">{itemDetails.title}</h5>
          <p>{formatCurrency(itemDetails.price)}</p>
          <p>{itemDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemDetails: state.cart.itemDetails,
});

export default connect(mapStateToProps)(ProductDetails);
