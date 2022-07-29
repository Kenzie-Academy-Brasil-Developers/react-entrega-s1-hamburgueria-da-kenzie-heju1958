import Product from "../Product/Product.jsx";

import { Lista } from "./styles.js";

const ProductsList = ({ products, handleClick, filteredProducts }) => {
  return (
    <Lista>
      {filteredProducts.length > 0
        ? filteredProducts?.map((elem, id) => (
            <Product elem={elem} key={id} id={id} handleClick={handleClick} />
          ))
        : products?.map((elem, id) => (
            <Product elem={elem} key={id} id={id} handleClick={handleClick} />
          ))}
    </Lista>
  );
};

export default ProductsList;
