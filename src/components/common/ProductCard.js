import React from "react";
import formatCurrency from "../../util";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { detailsProd } from "../../actions/CartAction";
const ProductCard = ({ products, addToCart, detailsProd }) => {
  return (
    <React.Fragment>
      <div className="card product__card">
        <img className="card-img-top" src={products.picture} alt="Img" />
        <div className="card-body">
          <Link to="/product-details">
            <h5 className="card-title" onClick={() => detailsProd(products)}>
              {products.title}
            </h5>
          </Link>
          <p>{formatCurrency(products.price)}</p>
          {products.stock === 0 ? (
            <p>Stock Out</p>
          ) : (
            <button
              className="btn addCartbtn"
              onClick={(e) => addToCart(products)}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

ProductCard.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductCard;
