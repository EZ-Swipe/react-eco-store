import { Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound";
import useEcoStore from "./zustand/useEcoStore";
import { Spin } from "antd";
import { useEffect } from "react";
import Subscribe from "./components/subscribe/Subscribe";
import Categories from "./pages/categories/Categories";
import CategoryProducts from "./pages/categories/category-products/CategoryProducts";
import ProductPage from "./pages/product-page/ProductPage";
import useCartStore from "./zustand/useCartStore";
import Cart from "./pages/cart/Cart";
import useWishlistStore from "./zustand/useWishlistStore";
import Wishlist from "./pages/wishlist/Wishlist";
import Checkout from "./pages/checkout/Checkout";
import About from "./pages/about/About";
import Contact from "./pages/contact-us/Contact";

function App() {
  const { loading, preload } = useEcoStore();
  const { cart } = useCartStore();
  const { wishlist } = useWishlistStore();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    preload();
  }, [preload]);

  if (loading) {
    return <Spin size="large" fullscreen />;
  }

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="/categories/:slug" element={<CategoryProducts />} />
        </Route>
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
