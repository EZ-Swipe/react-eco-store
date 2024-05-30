import { create } from "zustand";
import { fakeFetchReviews } from "../utils/api.js";

const useReviewsStore = create((set) => ({
  loading: false,
  reviews: [],

  getReviews: async () => {
    set({ loading: true });
    const reviews = await fakeFetchReviews();
    set({ reviews: reviews });
  },

  addReview: (newReview) => {
    set((state) => ({
      reviews: [...state.reviews, newReview],
    }));
  },
}));

export default useReviewsStore;
