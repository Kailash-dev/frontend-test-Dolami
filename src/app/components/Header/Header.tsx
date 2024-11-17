"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { FaBeer,FaSearch,FaFilter,FaGlobeAsia,FaLuggageCart,FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    console.log("Search initiated with:", keyword, category);
  };

  return (
    <header className={styles.headerContainer}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        {/* <Image
          src="/test-logo.png" // Update with your logo image path
          alt="Test Logo"
          width={120}
          height={50}
        /> */}
         <div className={styles.logo}>
          <span className={styles.logoTextRed}>Test</span> Logo
        </div>
      </div>

      {/* Search Bar Section */}
      <div className={styles.searchContainer}>
        <div className={styles.inputWrapper}>
          {/* Keyword Input */}
          <div className={styles.keywordSection}>
            <label className={styles.label}>Keyword</label>
            <input
              type="text"
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.divider}></div>

          {/* Category Dropdown */}
          <div className={styles.categorySection}>
            <label className={styles.label}>Category</label>
            <button className={styles.categoryButton}>{category}</button>
          </div>
          <button onClick={handleSearch} className={styles.searchButton}>
        <FaSearch />
        </button>
        </div>

        {/* Search and Filter Buttons */}
      
        <button className={styles.filterButton}> <FaFilter></FaFilter></button>
      </div>

      {/* Additional Controls: Language, User Profile, and Cart */}
      <div className={styles.controlsContainer}>
        <button className={styles.listButton}>List your creation</button>
        <button className={styles.languageButton}><FaGlobeAsia></FaGlobeAsia></button>
        <div className={styles.buttonUserContainer}>
        <button className={styles.profileButton}>  <FaUserCircle></FaUserCircle></button>
        <button className={styles.profileButton}>  <FaUserCircle></FaUserCircle></button>
        </div>
        
        <button className={styles.cartButton}><FaLuggageCart></FaLuggageCart></button>
      </div>
    </header>
  );
};

export default Header;
