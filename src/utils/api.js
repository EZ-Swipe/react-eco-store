import {categoriesData, productsData, reviewsData} from '../data';

export function fakeFetchCategories() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(categoriesData)
      }, 0)
   })
}

export function fakeFetchProducts() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(productsData)
      }, 500)
   })
}

export function fakeFetchReviews() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(reviewsData)
      }, 1)
   })
}