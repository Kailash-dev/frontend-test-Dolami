"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    console.log("Search initiated:", keyword, category);
  };

  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <span className={styles.logoTextRed}>Test</span> Logo
        </div>
      </div>

      {/* Search Bar Section */}
      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder="Search Avatown"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.categoryDropdown}>
          <span>{category}</span>
        </div>
        <button onClick={handleSearch} className={styles.searchButton}>
          🔍
        </button>
      </div>

      {/* Icon Section */}
      <div className={styles.iconSection}>
        <button className={styles.listButton}>List your creation</button>
        <button className={styles.iconButton}>⚙️</button>
        <button className={styles.iconButton}>🌐</button>
        <button className={styles.iconButton}>👤</button>
        <button className={styles.iconButton}>🛒</button>
      </div>
    </header>
  );
};

export default Header;
