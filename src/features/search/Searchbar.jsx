import { SearchIcon } from "lucide-react";
import React from "react";

const Searchbar = () => {
  return (
    <search className="bg-surface flex gap-2 px-4 py-2 rounded-full max-w-xl">
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
