import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../actions/productActions";
import { addToCart } from "../../../actions/CartAction";
import ProductCard from "../../common/ProductCard";

const ProductList = ({
  products: { filteredItems },
  getProducts,
  addToCart,
}) => {
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  // console.log("Products Item :", items);

  return (
    <React.Fragment>
      <div className="row">
        {filteredItems === null ? (
          <h1>Loading....</h1>
        ) : (
          filteredItems.map((product, index) => (
            <div className="col-xl-4" key={index}>
              <ProductCard products={product} addToCart={addToCart} />
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, { getProducts, addToCart })(
  ProductList
);
