import "./Checkout.scss";
import useCartStore from "../../zustand/useCartStore";
import { useNavigate } from "react-router-dom";
import BillingInformationForm from "./BillingInformationForm";
import CartTotal from "../../components/cart-total/CartTotal";
import { Divider, Flex } from "antd";
import AdditionalInfoForm from "./AdditionalInfoForm ";
import PaymentMethodForm from "./PaymentMethodForm";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useEffect } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  street: "",
  country: "",
  state: "",
  zipCode: "",
  email: "",
  phone: "",
  orderNotes: "",
  payment: "",
};

const BILLING_INFO_SCHEMA = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  companyName: Yup.string(),
  street: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  Email: Yup.string().email("Invalid email address").required(),
  phone: Yup.string().required("Required"),
});

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cart, setCart } = useCartStore();
  const navigate = useNavigate();

  const handleSubmit = (values, formikBag) => {
    if (cart.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Cart is empty",
        text: "Form not submitted.",
        showConfirmButton: true,
        iconColor: "#ea4b48",
      });
      return;
    }
    const cartToServer = cart.map(({ product, amount }) => {
      return {
        name: product.name,
        amount: amount,
        price: product.price,
      };
    });
    const dataToSend = {
      ...values,
      cart: cartToServer,
    };
    console.log(dataToSend);
    setCart([]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thanks for your order!",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#00b207",
    });
    formikBag.resetForm();
    navigate("/");
  };

  const getTotalSum = () => {
    return cart
      .reduce((sum, { product, amount }) => sum + product.price * amount, 0)
      .toFixed(2);
  };

  const getProductTotalSum = (product, amount) => {
    return product.price * amount;
  };

  return (
    <div className="page-padding-y">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={BILLING_INFO_SCHEMA}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              <div className="flex-container">
                <div className="form-inner">
                  <BillingInformationForm />
                  <Divider style={{ margin: "32px 0" }} />
                  <AdditionalInfoForm />
                </div>
                <div className="cart-total">
                  <span className="cart-total__title">Order Summery</span>
                  <div className="order-products">
                    {cart.map(({ product, amount }) => (
                      <div key={product.id} className="order-product">
                        <Flex align="center">
                          <img
                            className="order-product__image"
                            src={product.image}
                            alt="Product image"
                          />
                          <span>
                            {product.name} x{amount}
                          </span>
                        </Flex>
                        <div className="order-product__price">
                          ${getProductTotalSum(product, amount).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <CartTotal getTotalSum={getTotalSum} />
                  <PaymentMethodForm />
                  <Field
                    type="submit"
                    className="checkout-btn cart-page__checkout-btn"
                    value="Place Order"
                    id="submit"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
