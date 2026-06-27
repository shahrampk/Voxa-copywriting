import {
  HookBoxContainer,
  HooksPagePagination,
} from "../features/hookPage/Components";
import { PrimaryBtn } from "../shared/components/buttons/Buttons";
import HeadingBox from "../shared/components/HeadingBox";
import { hookBoxDataArray } from "../Data/HooksData";
import { useEffect, useState } from "react";
const Hooks = () => {
  const [hooksData, setHooksData] = useState([]);
  const hooksPerPage = 12;
  const totalPages = Math.ceil(hookBoxDataArray.length / hooksPerPage);
  function onPageChange(currentPage) {
    const hooksArr = hookBoxDataArray.slice(
      (currentPage - 1) * hooksPerPage,
      currentPage * hooksPerPage,
    );
    console.log(hooksArr);

    setHooksData(hooksArr);
  }
  useEffect(() => {
    onPageChange(1);
  }, []);
  return (
    <div id="hooks-page" className="py-4 px-6 flex flex-col gap-7">
      <HeadingBox
        heading="Hooks Library"
        subHeading="Stop staring at a blank screen. Browse 500+ high-performing opening lines designed to stop the scroll."
        button={<PrimaryBtn value={"Generate Hooks"} />}
      />
      <HookBoxContainer hooksData={hooksData} />
      <div id="Pagination-box" className="flex items-center justify-between">
        <div id="hooks-count">
          <p>Showing 12 out of {hookBoxDataArray.length} hooks</p>
        </div>
        <HooksPagePagination
          hooksPerPage={hooksPerPage}
          totalPages={totalPages}
          hooksData={hooksData}
          setHooksData={setHooksData}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Hooks;
