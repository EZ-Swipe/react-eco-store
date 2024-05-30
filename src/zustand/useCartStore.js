import { create } from "zustand";


const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) ?? [],

  setCart: (cart) => {
   set({cart: cart})
  },
}));

export default useCartStore;