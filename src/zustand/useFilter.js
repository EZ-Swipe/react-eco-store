import { create } from "zustand";

const useFilter = create((set) => ({
  activeCategory: {},
  productsCategory: [],
  priceRange: [0, 100],
  ratingFilter: [],
  tagsFilter: [],

  setActiveCategory: (category) => {
    set({ activeCategory: category });
  },
  setProductsCategory: (products) => {
    set({ productsCategory: products });
  },
  setPriceRange: (range) => {
    set({ priceRange: range });
  },

  setRatingFilter: (checkedValues) => {
    set({ ratingFilter: checkedValues });
  },
  setTagsFilter: (tags) => {
    set({ tagsFilter: tags });
  },
}));

export default useFilter;
