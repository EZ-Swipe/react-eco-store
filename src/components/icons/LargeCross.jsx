const LargeCross = ({onClick}) => {
  return (
      <svg
        className="main-icon"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick= {onClick}
      >
        <circle cx="22.5" cy="22.5" r="22.5" fill="white" />
        <path
          d="M28.75 16.25L16.25 28.75"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.25 16.25L28.75 28.75"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
  );
};

export default LargeCross;
