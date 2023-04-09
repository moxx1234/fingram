import React from "react";

const ThemeSvg = ({ theme, onClick }) => {
  if (theme === "light") {
    return (
      // moon icon
      <svg
        onClick={() => onClick(theme)}
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0"
          d="M4.75 26.9167C17.3407 29.4779 26.4146 13.8664 17.4167 4.75C25.3344 4.95811 31.6667 11.2599 31.6667 19C31.6667 26.8715 25.5214 33.25 17.4167 33.25C12.3043 33.25 7.37735 30.7672 4.75 26.9167Z"
          fill="black"
        />
        <path
          d="M4.75 26.9167C17.3407 29.4779 26.4146 13.8664 17.4167 4.75C25.3344 4.95811 31.6667 11.2599 31.6667 19C31.6667 26.8715 25.5214 33.25 17.4167 33.25C12.3043 33.25 7.37735 30.7672 4.75 26.9167Z"
          fill="black"
          stroke="black"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      // sun icon
      <svg
        onClick={() => onClick(theme)}
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.75 19C23.75 21.6234 21.6234 23.75 19 23.75C16.3766 23.75 14.25 21.6234 14.25 19C14.25 16.3766 16.3766 14.25 19 14.25C21.6234 14.25 23.75 16.3766 23.75 19Z"
          fill="white"
        />
        <path
          d="M4.75 19H7.91667M7.91676 30.0833L11.0834 26.9167M19 30.0833V33.25M26.9167 26.9167L30.0833 30.0833M7.91667 7.91667L11.0833 11.0833M30.0833 19H33.25M26.9165 11.0833L30.0832 7.91667M19 4.75V7.91667M23.75 19C23.75 21.6234 21.6234 23.75 19 23.75C16.3766 23.75 14.25 21.6234 14.25 19C14.25 16.3766 16.3766 14.25 19 14.25C21.6234 14.25 23.75 16.3766 23.75 19Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};

export default ThemeSvg;
