import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import useEcoStore from "../../zustand/useEcoStore";
import { Link } from "react-router-dom";

const Search = () => {
  const { products } = useEcoStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchProductsRef = useRef(null);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length === 0) {
      setFilteredProducts([]);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchProductsRef.current &&
      !searchProductsRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <CiSearch className="search-icon" size="1.8rem" />
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearchInputChange}
      />
      <button className="search-btn btn-primary" onClick={handleSearch}>
        Search
      </button>

      {isOpen ? (
        <div className="search-products" ref={searchProductsRef}>
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.slug}`}
              key={product.id}
              className="search-product"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="search-product__left">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
              <span className="search-product__price">${product.price}</span>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Search;
