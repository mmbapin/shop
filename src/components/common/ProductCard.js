import React from "react";
import formatCurrency from "../../util";
import PropTypes from "prop-types";

const ProductCard = ({ products, addToCart }) => {
  return (
    <React.Fragment>
      <div className="card product__card">
        <img className="card-img-top" src={products.picture} alt="Img" />
        <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
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
