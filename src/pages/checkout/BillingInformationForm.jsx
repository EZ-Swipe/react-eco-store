import { ErrorMessage, Field } from "formik";

const BillingInformationForm = () => {
  return (
    <>
      <div className="form-name">Billing Information</div>
      <div className="inputs-row-3 form-row">
        <div className="inputs-row-3__item">
          <label className="label" htmlFor="firstName">
            First name
          </label>
          <Field
            className="input"
            name="firstName"
            placeholder="Your first name"
            id="firstName"
          />
          <ErrorMessage
            className="error-lable"
            name="firstName"
            component="div"
          />
        </div>
        <div className="inputs-row-3__item">
          <label className="label" htmlFor="lastName">
            Last name
          </label>
          <Field
            className="input"
            name="lastName"
            placeholder="Your last name"
            id="lastName"
          />
          <ErrorMessage
            name="lastName"
            className="error-lable"
            component="div"
          />
        </div>
        <div className="inputs-row-3__item">
          <label className="label" htmlFor="companyName">
            Company Name <span>(optional)</span>
          </label>
          <Field
            className="input"
            name="companyName"
            placeholder="Company name"
            id="companyName"
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label className="label" htmlFor="street">
            Street Address
          </label>
          <Field
            className="input"
            name="street"
            placeholder="Street Address"
            id="street"
          />
          <ErrorMessage name="street" className="error-lable" component="div" />
        </div>
      </div>
      <div className="inputs-row-3 form-row">
        <div className="inputs-row-3__item">
          <label className="label" htmlFor="country">
            Country / Region
          </label>
          <Field
            className="input"
            name="country"
            placeholder="Country"
            id="country"
          />
          <ErrorMessage
            name="country"
            className="error-lable"
            component="div"
          />
        </div>
        <div className="inputs-row-3__item">
          <label className="label" htmlFor="state">
            State
          </label>
          <Field
            className="input"
            name="state"
            placeholder="State"
            id="state"
          />
          <ErrorMessage name="state" className="error-lable" component="div" />
        </div>
        <div className="inputs-row-3__item">
          <label className="label" htmlFor="zipCode">
            Zip Code
          </label>
          <Field
            className="input"
            name="zipCode"
            placeholder="Zip Code"
            id="zipCode"
          />
          <ErrorMessage
            name="zipCode"
            className="error-lable"
            component="div"
          />
        </div>
      </div>
      <div className="inputs-row-2 form-row">
        <div className="inputs-row-2__item">
          <label className="label" htmlFor="email">
            Email
          </label>
          <Field
            className="input"
            name="Email"
            type="email"
            placeholder="Email Address"
            id="email"
          />
          <ErrorMessage name="Email" className="error-lable" component="div" />
        </div>
        <div className="inputs-row-2__item">
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <Field
            className="input"
            name="phone"
            type="tel"
            placeholder="Phone number"
            id="phone"
          />
          <ErrorMessage name="phone" className="error-lable" component="div" />
        </div>
      </div>
    </>
  );
};

export default BillingInformationForm;
