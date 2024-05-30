const ProductCart = ({ product }) => {
  return (
    <div className="product-card border-hover" style={{ marginBottom: "10px" }}>
      {/* Sale */}
      {product.discount && (
        <div className="product-card__sale">
          Sale <span>{product.percentDiscount}%</span>
        </div>
      )}
      {product.stockStatus == "Out of Stock" && (
        <div className="product-card__stock">{product.stockStatus}</div>
      )}
      <img src={product.image} alt="" className="product-card__image" />
      <div className="product-card__info">
        <p className="product-card__title">{product.name}</p>
        {product.discount ? (
          <div className="product-card__prices">
            <p className="product-card__prices-price">${product.price}</p>
            <p className="product-card__prices-discount">${product.discount}</p>
          </div>
        ) : (
          <div className="product-card__prices">
            <p className="product-card__prices-price">${product.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
