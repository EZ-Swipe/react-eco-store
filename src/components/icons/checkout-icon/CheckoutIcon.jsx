import styles from "./CheckoutIcon.module.scss";

const CheckoutIcon = () => {
  return (
    <svg
      className={styles.checkoutIcon}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" />
      <path
        d="M16.6667 18.8333H14.1667L12.5 28H27.5L25.8333 18.8333H23.3333M16.6667 18.8333V16.3333C16.6667 14.4924 18.1591 13 20 13V13C21.8409 13 23.3333 14.4924 23.3333 16.3333V18.8333M16.6667 18.8333H23.3333M16.6667 18.8333V21.3333M23.3333 18.8333V21.3333"
        stroke="#1A1A1A"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckoutIcon;
