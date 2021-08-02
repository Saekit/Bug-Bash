import React from "react";

export const Hamburger = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="bars"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
  );
};

export const CheckCircle = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="check-circle"
      className="prefix__svg-inline--fa prefix__fa-check-circle prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
      />
    </svg>
  );
};

export const MoneyHand = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="hand-holding-usd"
      className="prefix__svg-inline--fa prefix__fa-hand-holding-usd prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M271.06 144.3l54.27 14.3a8.59 8.59 0 016.63 8.1c0 4.6-4.09 8.4-9.12 8.4h-35.6a30 30 0 01-11.19-2.2c-5.24-2.2-11.28-1.7-15.3 2l-19 17.5a11.68 11.68 0 00-2.25 2.66 11.42 11.42 0 003.88 15.74 83.77 83.77 0 0034.51 11.5V240c0 8.8 7.83 16 17.37 16h17.37c9.55 0 17.38-7.2 17.38-16v-17.6c32.93-3.6 57.84-31 53.5-63-3.15-23-22.46-41.3-46.56-47.7l-54.27-14.3a8.59 8.59 0 01-6.63-8.1c0-4.6 4.09-8.4 9.12-8.4h35.6A30 30 0 01332 83.1c5.23 2.2 11.28 1.7 15.3-2l19-17.5a11.31 11.31 0 002.17-2.6 11.43 11.43 0 00-3.84-15.78 83.82 83.82 0 00-34.52-11.5V16c0-8.8-7.82-16-17.37-16h-17.37C285.82 0 278 7.2 278 16v17.6c-32.89 3.6-57.85 31-53.51 63 3.14 23 22.51 41.3 46.57 47.7zm294.21 183.8c-11.8-10.7-30.2-10-42.6 0l-92.4 73.9a63.64 63.64 0 01-40 14H272a16 16 0 010-32h78.29c15.9 0 30.71-10.9 33.25-26.6a31.2 31.2 0 00.46-5.46A32 32 0 00352 320H192a117.66 117.66 0 00-74.1 26.29L71.4 384H16a16 16 0 00-16 16v96a16 16 0 0016 16h356.77a64 64 0 0040-14L564 377a32 32 0 001.28-48.9z"
      />
    </svg>
  );
};

export const HelpingHands = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="hands-helping"
      className="prefix__svg-inline--fa prefix__fa-hands-helping prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
      />
    </svg>
  );
};

export const ChevronDown = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="chevron-down"
      className="prefix__svg-inline--fa prefix__fa-chevron-down prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
      />
    </svg>
  );
};

export const ChevronUp = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="chevron-up"
      className="prefix__svg-inline--fa prefix__fa-chevron-up prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
      />
    </svg>
  );
};

export const User = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="user"
      className="prefix__svg-inline--fa prefix__fa-user prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
      />
    </svg>
  );
};
