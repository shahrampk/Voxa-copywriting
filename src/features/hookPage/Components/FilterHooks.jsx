import { ListFilter } from "lucide-react";
import { SecondaryBtn } from "../../../shared/components/buttons/Buttons";
import { useState } from "react";

const FilterHooks = ({ filterByFn, hooksData }) => {
  const [activeCategory, setActiveCategory] = useState("All Hooks");
  const categoriesArr = hooksData.map((hookData) => hookData.hookCategory);
  const categories = [...new Set(categoriesArr)];
  categories.unshift("All Hooks");
  console.log(categories);

  return (
    <section className="flex gap-3 items-center">
      {categories.map((category, index) => (
        <SecondaryBtn
          value={category}
          styles={`capitalize rounded-full! ${activeCategory === category ? "bg-accent-deep!" : ""}`}
          onClickFn={() => {
            filterByFn(category)
            setActiveCategory(category);
          }}
        />
      ))}
      <span className="border-r border-muted h-7 bg"></span>
      <SecondaryBtn
        value={"More Filter"}
        styles={"rounded-full!"}
        icon={<ListFilter size={18} />}
      />
    </section>
  );
};

export default FilterHooks;
