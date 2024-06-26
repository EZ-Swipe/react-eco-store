import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./Contact.scss";
import { Col, Divider, Row } from "antd";
import { useEffect } from "react";

const initialValues = {
  template: "",
  email: "",
  text: "",
  subject: "",
};

const CONTACT_VALIDATION = Yup.object({
  template: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required(),
  text: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = () => {
    alert("submit");
  };
  return (
    <>
      <section className="section-padding-y">
        <div className="container">
          <div className="contact-us">
            <div className="contact-info">
              <div className="contact-info__item">
                <div className="contact-info__item-icon">
                  <svg
                    width="34"
                    height="45"
                    viewBox="0 0 34 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.65625 43.2188H31.3438"
                      stroke="#2C742F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 24.0938C18.6908 24.0938 20.3123 23.4221 21.5078 22.2266C22.7033 21.031 23.375 19.4095 23.375 17.7188C23.375 16.028 22.7033 14.4065 21.5078 13.2109C20.3123 12.0154 18.6908 11.3438 17 11.3438C15.3092 11.3438 13.6877 12.0154 12.4922 13.2109C11.2966 14.4065 10.625 16.028 10.625 17.7188C10.625 19.4095 11.2966 21.031 12.4922 22.2266C13.6877 23.4221 15.3092 24.0938 17 24.0938V24.0938Z"
                      stroke="#2C742F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.9375 17.7188C32.9375 32.0625 17 43.2188 17 43.2188C17 43.2188 1.0625 32.0625 1.0625 17.7188C1.0625 13.4919 2.74162 9.4381 5.73049 6.44924C8.71935 3.46037 12.7731 1.78125 17 1.78125C21.2269 1.78125 25.2807 3.46037 28.2695 6.44924C31.2584 9.4381 32.9375 13.4919 32.9375 17.7188V17.7188Z"
                      stroke="#2C742F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="contact-info__item-text">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>
              <Divider style={{ margin: 0 }} />
              <div className="contact-info__item">
                <div className="contact-info__item-icon">
                  <svg
                    width="52"
                    height="41"
                    viewBox="0 0 52 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.95 0.950195H3.05C1.64172 0.950195 0.5 2.09182 0.5 3.5002V37.5002C0.5 38.9084 1.64162 40.0502 3.05 40.0502H48.95C50.3583 40.0502 51.5 38.9085 51.5 37.5002V3.5002C51.5 2.09192 50.3584 0.950195 48.95 0.950195ZM49.8 37.5003C49.8 37.9697 49.4195 38.3502 48.95 38.3502H3.05C2.58054 38.3502 2.20003 37.9697 2.20003 37.5003V3.5002C2.20003 3.03074 2.58054 2.65023 3.05 2.65023H48.95C49.4195 2.65023 49.8 3.03074 49.8 3.5002V37.5003Z"
                      fill="#2C742F"
                    />
                    <path
                      d="M47.3239 4.35387C47.0993 4.33424 46.8761 4.40467 46.7035 4.5497L27.0939 21.0226C26.4614 21.5542 25.5384 21.5542 24.9059 21.0226L5.29654 4.5496C5.06395 4.35437 4.7448 4.29799 4.45942 4.40178C4.17404 4.50557 3.96566 4.7538 3.91286 5.05293C3.86007 5.35205 3.97084 5.65656 4.20342 5.85179L23.8129 22.3239C25.0768 23.388 26.9231 23.388 28.1871 22.3239L47.7965 5.85189C47.9692 5.70696 48.0772 5.49938 48.0968 5.27476C48.1164 5.05014 48.046 4.82691 47.901 4.65429C47.7561 4.48147 47.5485 4.37349 47.3239 4.35387Z"
                      fill="#2C742F"
                    />
                    <path
                      d="M16.8483 22.206C16.5474 22.1388 16.2338 22.2398 16.0286 22.4699L4.12856 35.2199C3.91321 35.4405 3.83412 35.7604 3.92197 36.0559C4.00983 36.3514 4.25079 36.5761 4.55161 36.6433C4.85253 36.7104 5.1661 36.6094 5.37129 36.3793L17.2713 23.6293C17.4867 23.4088 17.5658 23.0888 17.4779 22.7934C17.3901 22.4979 17.1492 22.2731 16.8483 22.206Z"
                      fill="#2C742F"
                    />
                    <path
                      d="M35.9714 22.4699C35.7663 22.2398 35.4526 22.1388 35.1517 22.206C34.8508 22.2731 34.6099 22.4979 34.5221 22.7934C34.4342 23.0889 34.5133 23.4088 34.7287 23.6293L46.6287 36.3793C46.9514 36.7098 47.479 36.7221 47.8167 36.407C48.1545 36.0918 48.1788 35.5647 47.8714 35.2198L35.9714 22.4699Z"
                      fill="#2C742F"
                    />
                  </svg>
                </div>
                <p className="contact-info__item-text">
                  Proxy@gmail.com Help.proxy@gmail.com
                </p>
              </div>
              <Divider style={{ margin: 0 }} />
              <div className="contact-info__item">
                <div className="contact-info__item-icon">
                  <svg
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.9829 3.24219C29.9249 4.03345 32.6074 5.58385 34.7616 7.73809C36.9159 9.89233 38.4663 12.5748 39.2575 15.5168"
                      stroke="#2C742F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.1865 9.9502C26.9513 10.425 28.5604 11.3551 29.8527 12.6474C31.145 13.9396 32.0751 15.5488 32.5499 17.3136"
                      stroke="#2C742F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.4625 21.6416C14.2621 25.322 17.2449 28.292 20.933 30.0757C21.2031 30.2036 21.5018 30.2589 21.7998 30.2361C22.0977 30.2133 22.3846 30.1131 22.632 29.9456L28.0639 26.3255C28.3038 26.1653 28.5799 26.0674 28.8671 26.0408C29.1544 26.0141 29.4437 26.0595 29.709 26.1728L39.8699 30.5287C40.215 30.6753 40.5032 30.9301 40.691 31.2546C40.8788 31.5792 40.9561 31.956 40.9112 32.3283C40.5895 34.8411 39.3631 37.1506 37.4616 38.8244C35.56 40.4983 33.1135 41.4217 30.5802 41.4219C22.7558 41.4219 15.2518 38.3136 9.71909 32.7809C4.18637 27.2482 1.07813 19.7442 1.07812 11.9198C1.07836 9.38665 2.00185 6.94044 3.67571 5.03914C5.34957 3.13784 7.65903 1.91181 10.1717 1.59057C10.544 1.54568 10.9208 1.62294 11.2454 1.81074C11.5699 1.99853 11.8247 2.28669 11.9713 2.63182L16.3307 12.8014C16.4428 13.0641 16.4883 13.3505 16.4632 13.6351C16.4381 13.9196 16.3431 14.1936 16.1867 14.4327L12.577 19.9478C12.4132 20.1962 12.3165 20.4828 12.2964 20.7796C12.2764 21.0765 12.3336 21.3734 12.4625 21.6416V21.6416Z"
                      stroke="#2C742F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="contact-info__item-text">
                  <a href="tel:2195550114">(219) 555-0114</a>
                  <br />
                  <a href="tel:1643330487">(164) 333-0487</a>
                </p>
              </div>
            </div>
            <div className="contact-form">
              <div className="contact-form__title">Just Say Hello!</div>
              <p className="contact-form__text">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={CONTACT_VALIDATION}
                onSubmit={handleSubmit}
              >
                {(props) => (
                  <Form>
                    <div className="contact-form__flex">
                      <Row gutter={[16, 16]}>
                        <Col span={12}>
                          <Field
                            type="input"
                            style={{ width: "100%" }}
                            name="template"
                            placeholder="Template Cookie"
                            id="template"
                          />
                          <ErrorMessage
                            className="error-lable"
                            name="template"
                            component="div"
                          />
                        </Col>
                        <Col span={12}>
                          <Field
                            type="input"
                            style={{ width: "100%" }}
                            name="email"
                            placeholder="Email"
                            id="email"
                          />
                          <ErrorMessage
                            className="error-lable"
                            name="email"
                            component="div"
                          />
                        </Col>
                        <Col span={24}>
                          <Field
                            type="input"
                            style={{ width: "100%" }}
                            name="text"
                            placeholder="Hello!"
                            id="text"
                          />
                          <ErrorMessage
                            className="error-lable"
                            name="text"
                            component="div"
                          />
                        </Col>
                        <Col span={24}>
                          <Field
                            as="textarea"
                            style={{ width: "100%", height: "98px" }}
                            className="input-notes"
                            name="subject"
                            placeholder="Subjects"
                            id="subject"
                          />
                          <ErrorMessage
                            className="error-lable"
                            name="subject"
                            component="div"
                          />
                        </Col>
                        <Field
                          type="submit"
                          className="btn-primary contact-form__btn"
                          value="Send Message"
                          id="submit"
                        />
                      </Row>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      <div className="map-img"></div>
    </>
  );
};

export default Contact;
