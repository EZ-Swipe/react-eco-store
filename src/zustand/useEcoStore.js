import { create } from "zustand";
import { fakeFetchProducts } from "../utils/api.js";
import { fakeFetchCategories } from "../utils/api.js";

const useEcoStore = create((set) => ({
  loading: false,
  products: [],
  categories: [],

  preload: async () => {
    set({ loading: true });
    const products = await fakeFetchProducts();
    const categories = await fakeFetchCategories();
    set({ products: products, categories: categories, loading: false });
  },
}));

export default useEcoStore;
