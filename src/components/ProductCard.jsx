/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.pic} alt="" />
      <h3>{product.name}</h3>
      <p>{product.shop}</p>
      <p>Price:{product.amt} rs</p>
      <button >Add to cart</button>
    </div>
  );
};

export default ProductCard;
