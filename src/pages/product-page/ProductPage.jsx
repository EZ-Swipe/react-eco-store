import { useEffect, useState } from "react";
import useEcoStore from "../../zustand/useEcoStore";
import QuickViewModal from "../../components/quick-view/QuickViewModal";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import videoPreviewImg from "/images/video-preview.jpg";
import useReviewsStore from "../../zustand/useReviewsStore";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiFillStar } from "react-icons/ai";
import { Divider } from "antd";

const ProductPage = () => {
  const { slug } = useParams();
  const { products } = useEcoStore();
  const [product, setProduct] = useState({});
  const { getReviews, reviews } = useReviewsStore();
  const [isOpenInfo, setIsOpenInfo] = useState(true);
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setProduct(products.find((product) => product.slug === slug));
  }, [products, slug]);

  const filteredReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  const productTags = product.tags
    ? product.tags.map((tag) => tag).join(", ")
    : "";

  return (
    <div className="page-padding-y">
      <div className="container">
        <div className="product-page">
          <QuickViewModal product={product} />

          <div className="product-page__navigation">
            <div
              className={`product-page__navigation-item ${
                isOpenInfo ? "active" : ""
              }`}
              onClick={() => {
                setIsOpenInfo(true);
                setIsOpenReviews(false);
              }}
            >
              Additional Information
            </div>
            <div
              className={`product-page__navigation-item ${
                isOpenReviews ? "active" : ""
              }`}
              onClick={() => {
                setIsOpenReviews(true);
                setIsOpenInfo(false);
              }}
            >
              Customer Feedback
            </div>
          </div>

          {isOpenInfo && (
            <div className="additional-information">
              <ul className="additional-information__list">
                <li className="additional-information__item">
                  <p className="additional-information__item-characteristic">
                    Weight
                  </p>
                  <p className="additional-information__item-value">
                    {product.weight}
                  </p>
                </li>
                <li className="additional-information__item">
                  <p className="additional-information__item-characteristic">
                    Color:
                  </p>
                  <p className="additional-information__item-value">
                    {product.color}
                  </p>
                </li>
                <li className="additional-information__item">
                  <p className="additional-information__item-characteristic">
                    Type:
                  </p>
                  <p className="additional-information__item-value">
                    {product.type}
                  </p>
                </li>
                <li className="additional-information__item">
                  <p className="additional-information__item-characteristic">
                    Category:
                  </p>
                  <p className="additional-information__item-value">
                    {product.categoryName}
                  </p>
                </li>
                <li className="additional-information__item">
                  <p className="additional-information__item-characteristic">
                    Stock Status:
                  </p>
                  <span className="additional-information__item-value">
                    {product.stockStatus} <span>({product.availability})</span>
                  </span>
                </li>
                <li className="additional-information__item">
                  <p className="additional-information__item-characteristic">
                    Tags:
                  </p>
                  <p className="additional-information__item-value">
                    {productTags}
                  </p>
                </li>
              </ul>

              <div className="video-block">
                <div className="video-block__preview">
                  <span className="video-block__btn"></span>
                  <img src={videoPreviewImg} alt="Video Preview Image" />
                </div>
                <div className="video-block__info">
                  <div className="video-block__info-item">
                    <svg
                      width="26"
                      height="33"
                      viewBox="0 0 26 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.0671 24.7501C25.326 24.7501 25.5359 24.5402 25.5359 24.2813V13.0313C25.5359 12.4718 25.3178 11.8995 24.9219 11.4198L21.4454 7.20769C21.2633 6.987 21.0539 6.801 20.8265 6.65287C20.8405 6.50962 20.8484 6.36494 20.8484 6.21887V0.968872C20.8484 0.709997 20.6385 0.500122 20.3797 0.500122C20.1208 0.500122 19.9109 0.709997 19.9109 0.968872C19.9109 0.968872 19.91 6.26356 19.9096 6.28593C19.7762 6.26231 19.6409 6.25012 19.5047 6.25012H13.4422C13.0154 6.25012 12.597 6.36987 12.2224 6.58994C12.2062 6.59575 12.1902 6.60225 12.1744 6.60994L7.60498 8.83568C7.09873 9.08962 6.69392 9.51556 6.46498 10.035C6.46248 10.0407 6.46011 10.0464 6.45786 10.0521L4.56861 14.8441C4.47367 15.085 4.59192 15.3572 4.83279 15.4522C4.88923 15.4744 4.94736 15.4849 5.00461 15.4849C5.19148 15.4849 5.36811 15.3724 5.44079 15.188L7.32636 10.4052C7.46817 10.0884 7.71611 9.82887 8.02042 9.67612L10.4347 8.50019L8.02492 11.4199C7.66411 11.857 7.47342 12.4143 7.47342 13.0314V29.2189C7.47342 29.4074 7.48998 29.592 7.52004 29.7719L2.68992 27.6316C1.59879 27.1482 1.10429 25.864 1.58779 24.769C1.58986 24.7642 1.59186 24.7594 1.59386 24.7547L4.64904 17.1619C4.74567 16.9217 4.62936 16.6487 4.38917 16.5521C4.14886 16.4554 3.87598 16.5718 3.77929 16.8119L0.726794 24.3976C0.0404187 25.9632 0.749419 27.7971 2.31011 28.4886L7.97411 30.9984C7.98104 31.0014 7.98811 31.0037 7.99511 31.0064C8.56998 31.9046 9.56386 32.5001 10.6922 32.5001H22.2547C24.0333 32.5001 25.5359 30.9974 25.5359 29.2188V26.4688C25.5359 26.2099 25.326 26.0001 25.0672 26.0001C24.8083 26.0001 24.5984 26.2099 24.5984 26.4688V29.2188C24.5984 30.4893 23.5251 31.5626 22.2547 31.5626H10.6922C9.43429 31.5626 8.41092 30.5112 8.41092 29.2188V13.0313C8.41092 12.6289 8.52429 12.2875 8.74798 12.0166L12.2244 7.80444C12.548 7.41244 12.9919 7.18756 13.4422 7.18756H19.5047C19.593 7.18756 19.681 7.1965 19.7679 7.21337C19.4745 8.21406 18.7476 9.04906 17.766 9.4675C17.5094 9.03819 17.0401 8.75006 16.5046 8.75006C15.6947 8.75006 15.0359 9.40894 15.0359 10.2188C15.0359 11.0287 15.6947 11.6876 16.5046 11.6876C17.2535 11.6876 17.8729 11.1239 17.962 10.3986C19.2244 9.92112 20.179 8.90937 20.6044 7.67444C20.6452 7.7155 20.6847 7.75869 20.7224 7.80444L24.1989 12.0166C24.4565 12.3287 24.5984 12.6891 24.5984 13.0314V24.2814C24.5984 24.5402 24.8082 24.7501 25.0671 24.7501ZM16.5046 10.7501C16.2117 10.7501 15.9734 10.5117 15.9734 10.2188C15.9734 9.92587 16.2117 9.68756 16.5046 9.68756C16.7975 9.68756 17.0359 9.92587 17.0359 10.2188C17.0359 10.5117 16.7975 10.7501 16.5046 10.7501Z"
                        fill="#00B307"
                      />
                      <path
                        d="M12.4424 25.4375C12.5623 25.4375 12.6823 25.3917 12.7738 25.3002L20.7738 17.3002C20.9569 17.1171 20.9569 16.8203 20.7738 16.6373C20.5908 16.4542 20.294 16.4542 20.111 16.6373L12.111 24.6373C11.8121 24.9159 12.0414 25.4517 12.4424 25.4375Z"
                        fill="#00B307"
                      />
                      <path
                        d="M13.4414 20.5C14.5614 20.5 15.4727 19.5887 15.4727 18.4687C15.4727 17.3487 14.5614 16.4375 13.4414 16.4375H13.3789C12.2589 16.4375 11.3477 17.3487 11.3477 18.4687C11.3477 19.5887 12.2589 20.5 13.3789 20.5H13.4414ZM12.2852 18.4687C12.2852 17.8657 12.7758 17.375 13.3789 17.375H13.4414C14.0445 17.375 14.5352 17.8657 14.5352 18.4687C14.5352 19.0718 14.0445 19.5625 13.4414 19.5625H13.3789C12.7758 19.5625 12.2852 19.0718 12.2852 18.4687Z"
                        fill="#00B307"
                      />
                      <path
                        d="M19.5039 25.4375H19.5664C20.6864 25.4375 21.5977 24.5262 21.5977 23.4062C21.5977 22.2862 20.6864 21.375 19.5664 21.375H19.5039C18.3839 21.375 17.4727 22.2862 17.4727 23.4062C17.4727 24.5262 18.3839 25.4375 19.5039 25.4375ZM19.5039 22.3125H19.5664C20.1695 22.3125 20.6602 22.8032 20.6602 23.4062C20.6602 24.0093 20.1695 24.5 19.5664 24.5H19.5039C18.9008 24.5 18.4102 24.0093 18.4102 23.4062C18.4102 22.8032 18.9008 22.3125 19.5039 22.3125Z"
                        fill="#00B307"
                      />
                    </svg>
                    <div>
                      <p className="video-block__info-item-title">
                        64% Discount
                      </p>
                      <p className="video-block__info-item-text">
                        Save your 64% money with us
                      </p>
                    </div>
                  </div>
                  <div className="video-block__info-item">
                    <svg
                      width="32"
                      height="31"
                      viewBox="0 0 32 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.9759 0.371204C31.9127 0.178579 31.7368 0.0453919 31.5343 0.0369544C30.5147 -0.00548309 27.7279 0.00182939 23.8822 0.985204C20.3025 1.90064 16.9433 3.40533 14.1675 5.3367C13.9472 5.49002 13.893 5.79283 14.0462 6.01314C14.1994 6.23345 14.5022 6.28777 14.7226 6.13452C17.4039 4.2687 20.6546 2.81377 24.1229 1.92683C25.4189 1.59545 26.7587 1.34389 28.029 1.18627C27.5082 1.4112 26.95 1.67439 26.369 1.98289C22.4401 4.06858 20.245 6.73552 19.032 8.8792C18.8726 8.16395 18.8289 7.34189 18.8286 6.97552C18.8285 6.7072 18.611 6.48977 18.3427 6.48977C18.0743 6.48977 17.8567 6.70733 17.8567 6.9757C17.8567 7.19077 17.8739 8.98302 18.4167 10.0878C17.6686 11.6852 16.9689 13.2821 16.2918 14.8286C16.0042 15.4855 15.7211 16.132 15.4404 16.7649C15.0026 15.9405 14.4256 14.4479 14.5839 12.4956C14.6055 12.2282 14.4063 11.9937 14.1387 11.972C13.872 11.9508 13.6368 12.1496 13.6151 12.4171C13.3877 15.2219 14.503 17.1801 14.9555 17.848C14.1074 19.7223 13.271 21.4484 12.3902 22.9217C11.9367 21.895 11.2263 19.9387 11.2263 17.7604C11.2263 17.492 11.0087 17.2745 10.7404 17.2745C10.472 17.2745 10.2544 17.492 10.2544 17.7604C10.2544 20.6498 11.372 23.1069 11.7742 23.8975C10.8119 25.3353 9.78436 26.4596 8.62367 27.1438C5.08779 23.3037 4.74292 16.0988 10.9201 9.42739C11.6223 8.66902 12.3929 7.94508 13.2107 7.27577C13.4184 7.10577 13.4489 6.79964 13.2789 6.59195C13.1089 6.38427 12.8027 6.35377 12.5951 6.5237C11.7429 7.22133 10.9394 7.97614 10.207 8.76708C3.69104 15.8043 4.05817 23.4746 7.79436 27.6765C4.54073 29.8661 0.514981 30.0029 0.472856 30.0041C0.204731 30.0113 -0.00683118 30.2344 0.000168815 30.5026C0.00710632 30.7665 0.223231 30.9758 0.485731 30.9758C0.490044 30.9758 0.494419 30.9757 0.498731 30.9756C0.685231 30.9707 4.97954 30.83 8.49723 28.3732C9.56311 29.2429 11.235 29.772 13.2621 29.772C15.557 29.772 18.3072 29.0937 21.148 27.4638C23.7798 25.9538 25.6666 23.6438 26.7561 20.5981C27.6891 17.9901 28.0037 14.8521 27.666 11.5234C27.0639 5.58933 29.3056 2.91164 31.8177 0.902017C31.9759 0.775329 32.0389 0.563829 31.9759 0.371204ZM27.6832 4.34633C26.7273 6.34727 26.4054 8.72702 26.699 11.6214C27.0222 14.8071 26.7255 17.798 25.8409 20.2707C24.8315 23.0926 23.0898 25.229 20.6643 26.6208C17.6035 28.377 15.0344 28.7749 13.418 28.7995C11.7655 28.8254 10.3365 28.4726 9.37767 27.8195C10.1757 27.3018 10.9084 26.6075 11.5969 25.7693C11.6348 25.7696 11.6757 25.7698 11.7214 25.7698C12.1986 25.7698 13.0877 25.7493 14.1367 25.6268C16.2354 25.3815 17.8898 24.8636 19.0541 24.0875C19.2774 23.9386 19.3377 23.6369 19.1889 23.4136C19.04 23.1904 18.7383 23.1301 18.515 23.2789C16.7214 24.4746 13.8324 24.7343 12.3412 24.7856C13.2865 23.4374 14.1572 21.8185 15.0159 20.0255C15.8609 20.0234 18.104 19.8406 20.2367 18.1404C20.4465 17.9731 20.481 17.6673 20.3137 17.4575C20.1464 17.2476 19.8407 17.2132 19.6309 17.3805C18.0646 18.6291 16.407 18.9518 15.4841 19.0291C16.0444 17.8166 16.6045 16.5374 17.182 15.2185C17.48 14.5377 17.7827 13.8468 18.0915 13.1512C18.1248 13.152 18.16 13.1525 18.197 13.1525C18.9295 13.1525 20.3882 12.9738 21.9912 11.7861C22.2068 11.6264 22.2521 11.322 22.0923 11.1064C21.9325 10.8908 21.6282 10.8455 21.4125 11.0053C20.4235 11.738 19.5133 12.0133 18.9238 12.1152C18.7809 12.14 18.6501 12.1556 18.5319 12.1656C18.8151 11.5371 19.1042 10.9065 19.401 10.2768C21.2114 6.43527 24.423 4.12058 26.7985 2.85527C27.8283 2.30677 28.7948 1.90214 29.5879 1.61302C28.8911 2.34727 28.2111 3.24133 27.6832 4.34633Z"
                        fill="#00B307"
                      />
                    </svg>

                    <div>
                      <p className="video-block__info-item-title">
                        100% Organic
                      </p>
                      <p className="video-block__info-item-text">
                        100% Organic Vegetables
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isOpenReviews && (
            <div className="reviews">
              {filteredReviews.map((review, index) => (
                <div key={review.id} className="reviews__item">
                  <div className="reviews__item-header">
                    <Avatar size={41} icon={<UserOutlined />} />
                    <div className="reviews__item-info">
                      <p className="reviews__item-username">
                        {review.userName}
                      </p>
                      <div className="reviews__item-rating">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar
                            key={i}
                            className={
                              i < review.rating ? "star active" : "star"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="reviews__item-comment">{review.comment}</p>
                  {index === filteredReviews.length - 1 ? "" : <Divider />}
                </div>
              ))}

              {!showAllReviews && reviews.length > 4 && (
                <div className="reviews__load-more">
                  <button
                    className="reviews__load-more-btn"
                    onClick={() => setShowAllReviews(true)}
                  >
                    Load more
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
