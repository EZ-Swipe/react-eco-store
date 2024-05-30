import { create } from "zustand";

const useWishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) ?? [],

  setWishlist: (wishlist) => {
    set({ wishlist: wishlist });
  },
}));

export default useWishlistStore;
