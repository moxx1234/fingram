import React from "react";

const DeleteButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_18_1648)">
          <path
            d="M20.8823 9.11759L9.11759 20.8823M9.1176 9.11759L20.8823 20.8823M28.2352 14.9999C28.2352 22.3096 22.3096 28.2352 14.9999 28.2352C7.6903 28.2352 1.76465 22.3096 1.76465 14.9999C1.76465 7.6903 7.6903 1.76465 14.9999 1.76465C22.3096 1.76465 28.2352 7.6903 28.2352 14.9999Z"
            stroke="#EA3943"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_18_1648">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default DeleteButton;