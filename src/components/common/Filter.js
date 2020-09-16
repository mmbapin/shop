import React from "react";
import { connect } from "react-redux";
import { sortProductItem } from "../../actions/productActions";

const Filter = ({ sort, products, filteredProduct, sortProductItem }) => {
  //   console.log("Fiter Item", filteredProduct);
  //   console.log("Filter : ", products);
  return (
    <div>
      {!filteredProduct ? (
        <div>Loading......</div>
      ) : (
        <div className="filter__parts">
          <div className="filter__result">
            {filteredProduct.length} Products
          </div>
          <div className="filter__sort">
            <select
              value={sort}
              onChange={(e) =>
                sortProductItem(e.target.value, !products ? null : products)
              }
            >
              <option value="default">Default</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sort: state.products.sort,
  products: state.products.items,
  filteredProduct: state.products.filteredItems,
});

export default connect(mapStateToProps, { sortProductItem })(Filter);
