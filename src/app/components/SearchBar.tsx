"use client";

import styles from "@/styles/SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search games..."
        className={styles.searchInput}
      />
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    </div>
  );
};



