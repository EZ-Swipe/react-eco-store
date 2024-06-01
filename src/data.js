import { v4 as uuidv4 } from "uuid";

export const categoriesData = [
  {
    id: 1,
    name: "Fresh Fruit",
    image: "/public/uploads/categories/Fruits.png",
    slug: "fruits",
  },

  {
    id: 2,
    name: "Vegetables",
    image: "/react-eco-store/src/images/uploads/categories/Vegetables.png",
    slug: "vegetables",
  },

  {
    id: 3,
    name: "Fish",
    image: "/react-eco-store/src/images/uploads/categories/Fish.png",
    slug: "fish",
  },

  {
    id: 4,
    name: "Meat",
    image: "/react-eco-store/src/images/uploads/categories/Meat.png",
    slug: "meat",
  },

  {
    id: 5,
    name: "Drinks",
    image: "/react-eco-store/src/images/uploads/categories/soft-drink.png",
    slug: "drinks",
  },
  {
    id: 6,
    name: "Snacks",
    image: "/react-eco-store/src/images/uploads/categories/Snacks.png",
    slug: "snacks",
  },
];

export const productsData = [
  {
    id: 111,
    category_id: categoriesData.find(
      (category) => category.name === "Fresh Fruit"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Fresh Fruit"
    ).name,
    name: "Green Apple",
    image: "/react-eco-store/src/images/uploads/products/apple.jpg",
    price: 10.49,
    rating: 4,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "150g",
    color: "Green",
    type: "Fruit",
    stockStatus: "In Stock",
    availability: "5,413",
    discount: 20.99,
    percentDiscount: 50,
    tags: ["Fruit, Apple, Green Apple, Healthy", "Organic", "Vitamins"],
    slug: "green-apple",
  },

  {
    id: 112,
    category_id: categoriesData.find(
      (category) => category.name === "Fresh Fruit"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Fresh Fruit"
    ).name,
    name: "Fresh Mango",
    image: "/react-eco-store/src/images/uploads/products/mango.jpg",
    price: 19.99,
    rating: 4,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "200g",
    color: "Yellow",
    type: "Fruit",
    stockStatus: "Out of Stock",
    availability: "0",
    tags: ["Fruit", "Mango", "Fresh Mango", "Healthy", "Juicy", "Vitamins"],
    slug: "fresh-mango",
  },

  {
    id: 113,
    category_id: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).name,
    name: "Chinese Cabbage",
    image: "/react-eco-store/src/images/uploads/products/chinese-cabbage.jpg",
    price: 17.51,
    rating: 5,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "300g",
    color: "Green",
    type: "Vegetable",
    stockStatus: "In Stock",
    availability: "2,965",
    discount: 48.55,
    percentDiscount: 64,
    tags: ["Vegetable", "Chinese Cabbage", "Cabbage", "Healthy", "Nutritious"],
    slug: "chinese-cabbage",
  },

  {
    id: 114,
    category_id: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).name,
    name: "Green Capsicum",
    image: "/react-eco-store/src/images/uploads/products/green-capsicum.jpg",
    price: 12.99,
    rating: 2,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "250g",
    color: "Green",
    type: "Vegetable",
    stockStatus: "In Stock",
    availability: "4,621",
    tags: ["Vegetable", "Capsicum", "Green Capsicum", "Fresh", "Flavorful"],
    slug: "green-capsicum",
  },

  {
    id: 115,
    category_id: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).name,
    name: "Ladies Finger",
    image: "/react-eco-store/src/images/uploads/products/ladies-finger.jpg",
    price: 6.99,
    rating: 4,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "200g",
    color: "Green",
    type: "Vegetable",
    stockStatus: "In Stock",
    availability: "3,214",
    tags: ["Vegetable", "Ladies Finger", "Okra", "Tender", "Delicious"],
    slug: "ladies-finger",
  },

  {
    id: 116,
    category_id: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).name,
    name: "Corn",
    image: "/react-eco-store/src/images/uploads/products/corn.jpg",
    price: 8.7,
    rating: 4,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "400g",
    color: "Yellow",
    type: "Vegetable",
    stockStatus: "In Stock",
    availability: "5,987",
    tags: ["Vegetable", "Corn", "Sweet Corn", "Tender", "Healthy"],
    slug: "corn",
  },

  {
    id: 117,
    category_id: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).id,
    categoryName: categoriesData.find(
      (category) => category.name === "Vegetables"
    ).name,
    name: "Red Tomato",
    image: "/react-eco-store/src/images/uploads/products/tomato.jpg",
    price: 9.99,
    rating: 5,
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    weight: "200g",
    color: "Red",
    type: "Vegetable",
    stockStatus: "In Stock",
    availability: "7,352",
    tags: ["Vegetable", "Tomato", "Red Tomato", "Juicy", "Flavorful"],
    slug: "red-tomato",
  },
];

export const reviewsData = [
  {
    id: uuidv4(),
    product: "Green Apple",
    userName: "Kristin Watson",
    comment: "Duis at ullamcorper nulla, eu dictum eros.",
    rating: 5,
  },
  {
    id: uuidv4(),
    product: "Fresh Mango",
    userName: "Jacob Jones",
    comment:
      "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
    rating: 4,
  },
  {
    id: uuidv4(),
    product: "Green Apple",
    userName: "Ralph Edwards",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio! Accusamus eum quis labore dolores deleniti ut, eaque adipisci laboriosam totam, corporis illo dolorem consectetur quos architecto. Rerum, nesciunt! Dolorum!",
    rating: 3,
  },
  {
    id: uuidv4(),
    product: "Green Apple",
    userName: "Ralph Edwards",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio! Accusamus eum quis labore dolores deleniti ut, eaque adipisci laboriosam totam, corporis illo dolorem consectetur quos architecto. Rerum, nesciunt! Dolorum!",
    rating: 3,
  },
  {
    id: uuidv4(),
    product: "Green Apple",
    userName: "Ralph Edwards",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio! Accusamus eum quis labore dolores deleniti ut, eaque adipisci laboriosam totam, corporis illo dolorem consectetur quos architecto. Rerum, nesciunt! Dolorum!",
    rating: 3,
  },
  {
    id: uuidv4(),
    product: "Green Apple",
    userName: "Ralph Edwards",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio! Accusamus eum quis labore dolores deleniti ut, eaque adipisci laboriosam totam, corporis illo dolorem consectetur quos architecto. Rerum, nesciunt! Dolorum!",
    rating: 3,
  },
  {
    id: uuidv4(),
    product: "Green Apple",
    userName: "Ralph Edwards",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, optio! Accusamus eum quis labore dolores deleniti ut, eaque adipisci laboriosam totam, corporis illo dolorem consectetur quos architecto. Rerum, nesciunt! Dolorum!",
    rating: 3,
  },
];
