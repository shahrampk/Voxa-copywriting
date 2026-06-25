import { SearchIcon } from "lucide-react";
import React from "react";

const Searchbar = () => {
  return (
    <search className="bg-surface flex items-center gap-2 px-4 py-2 rounded-lg w-full max-w-2xl">
      <SearchIcon opacity={0.7} />
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        className="outline-none w-full"
        placeholder="Search post, hooks or docs..."
      />
    </search>
  );
};

export default Searchbar;
