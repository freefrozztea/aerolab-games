"use client";

import styles from "@/styles/SearchBar.module.css";
import { Option } from "lucide-react";
import { useState } from "react";

type Option = {
  id: number;
  name: string;
  image: string;
};

type SearchBarWithResultsProps = {
  options: Option[];
};

export const SearchBar: React.FC<SearchBarWithResultsProps> = ({options}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<Option[]>([]);

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search games..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleSearchChange}
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
      
      {filteredResults.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={result.image}
                alt={result.name}
                className="w-8 h-8 mr-4 rounded-full"
              />
              <span className="text-gray-700">{result.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



