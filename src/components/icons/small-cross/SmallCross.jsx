import styles from "./SmallCross.module.scss";

const SmallCross = () => {
  return (
    <svg
      className={styles.smallCross}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_60_313)">
        <path
          d="M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z"
          stroke="#CCCCCC"
          stroke-miterlimit="10"
        />
        <path
          d="M16 8L8 16"
          stroke="#666666"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 16L8 8"
          stroke="#666666"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_60_313">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SmallCross;
