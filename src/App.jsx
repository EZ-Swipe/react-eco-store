// import { Route, Routes } from "react-router-dom";
// import "./scss/style.scss";
// import { Spin } from "antd";
// import { useEffect, lazy, Suspense } from "react";
// import useEcoStore from "./zustand/useEcoStore";
// import useCartStore from "./zustand/useCartStore";
// import useWishlistStore from "./zustand/useWishlistStore";

// // Динамические импорты
// const Home = lazy(() => import("./pages/home/Home"));
// const Header = lazy(() => import("./components/header/Header"));
// const Footer = lazy(() => import("./components/footer/Footer"));
// const NotFound = lazy(() => import("./pages/NotFound"));
// const Subscribe = lazy(() => import("./components/subscribe/Subscribe"));
// const Categories = lazy(() => import("./pages/categories/Categories"));
// const CategoryProducts = lazy(() => import("./pages/categories/category-products/CategoryProducts"));
// const ProductPage = lazy(() => import("./pages/product-page/ProductPage"));
// const Cart = lazy(() => import("./pages/cart/Cart"));
// const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
// const Checkout = lazy(() => import("./pages/checkout/Checkout"));
// const About = lazy(() => import("./pages/about/About"));
// const Contact = lazy(() => import("./pages/contact-us/Contact"));

// function App() {
//   const { loading, preload } = useEcoStore();
//   const { cart } = useCartStore();
//   const { wishlist } = useWishlistStore();

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   useEffect(() => {
//     preload();
//   }, [preload]);

//   if (loading) {
//     return <Spin size="large" fullscreen />;
//   }

//   return (
//     <div className="wrapper">
//       <Suspense fallback={<Spin size="large" fullscreen />}>
//         <Header />
//       </Suspense>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <Home />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/categories"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <Categories />
//             </Suspense>
//           }
//         >
//           <Route
//             path="/categories/:slug"
//             element={
//               <Suspense fallback={<Spin size="large" fullscreen />}>
//                 <CategoryProducts />
//               </Suspense>
//             }
//           />
//         </Route>
//         <Route
//           path="/product/:slug"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <ProductPage />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/cart"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <Cart />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/wishlist"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <Wishlist />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/checkout"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <Checkout />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/about-us"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <About />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <Contact />
//             </Suspense>
//           }
//         />
//         <Route
//           path="*"
//           element={
//             <Suspense fallback={<Spin size="large" fullscreen />}>
//               <NotFound />
//             </Suspense>
//           }
//         />
//       </Routes>
//       <Suspense fallback={<Spin size="large" fullscreen />}>
//         <Subscribe />
//       </Suspense>
//       <Suspense fallback={<Spin size="large" fullscreen />}>
//         <Footer />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

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