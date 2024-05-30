import { Field } from "formik";

const PaymentMethodForm = () => {
  return (
    <>
      <div className="form-radio">
        <div className="cart-total__title">Payment Method</div>
        <div className="form-radio__inner">
          <div className="form-radio__payment">
            <Field
              className="radio-input"
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked
              id="CashonDelivery"
            />
            <label className="radio-label" htmlFor="CashonDelivery">
              Cash on Delivery
            </label>
          </div>
          <div className="form-radio__payment">
            <Field
              className="radio-input"
              type="radio"
              name="payment"
              value="Paypal"
              id="paypal"
            />
            <label className="radio-label" htmlFor="paypal">
              Paypal
            </label>
          </div>
          <div className="form-radio__payment">
            <Field
              className="radio-input"
              type="radio"
              name="payment"
              value="Amazon Pay"
              id="AmazonPay"
            />
            <label className="radio-label" htmlFor="AmazonPay">
              Amazon Pay
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodForm;
