import React from "react";

const UserSvg = ({ theme }) => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8046 28.4374L27.6991 28.192C27.1019 26.6024 26.1058 25.559 24.5569 24.9289C23.0353 24.3099 20.9952 24.0963 18.3152 24.0963C15.6556 24.0963 13.627 24.3232 12.1089 24.9489C10.5662 25.5849 9.56694 26.626 8.96177 28.1883L8.8438 28.4547C6.13392 25.9224 4.44 22.3166 4.44 18.315C4.44 10.6521 10.6521 4.44 18.315 4.44C25.978 4.44 32.19 10.6521 32.19 18.315C32.19 22.3075 30.5037 25.906 27.8046 28.4374ZM13.3046 15.2317C13.3046 12.4645 15.5479 10.2213 18.315 10.2213C21.0821 10.2213 23.3254 12.4645 23.3254 15.2317C23.3254 17.9988 21.0821 20.2421 18.315 20.2421C15.5479 20.2421 13.3046 17.9988 13.3046 15.2317Z"
        fill="#3861FB"
      />
      <path
        d="M32.375 18.5C32.375 26.163 26.163 32.375 18.5 32.375C10.8371 32.375 4.625 26.163 4.625 18.5C4.625 10.8371 10.8371 4.625 18.5 4.625C26.163 4.625 32.375 10.8371 32.375 18.5Z"
        stroke={theme === "light" ? "#323232" : "white"}
        strokeWidth="2"
      />
      <path
        d="M23.125 15.4167C23.125 17.971 21.0544 20.0417 18.5 20.0417C15.9456 20.0417 13.875 17.971 13.875 15.4167C13.875 12.8623 15.9456 10.7917 18.5 10.7917C21.0544 10.7917 23.125 12.8623 23.125 15.4167Z"
        stroke={theme === "light" ? "#323232" : "white"}
        strokeWidth="2"
      />
      <path
        d="M9.50293 28.5208C10.6386 25.5781 13.2024 24.6667 18.5002 24.6667C23.8436 24.6667 26.4057 25.5266 27.5265 28.5208"
        stroke={theme === "light" ? "#323232" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UserSvg;