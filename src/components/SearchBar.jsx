import React, { useState } from "react";
import "./SearchBar.css";
import iconArrow from "../assets/icon-arrow.svg";

function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button type="submit">
        <img src="/images/icon-arrow.svg" alt="Search" />
      </button>
    </form>
  );
}

export default SearchBar;
