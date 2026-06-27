import { useEffect } from "react";
import Pagination from "../../../shared/components/pagination/Pagination";

const HooksPagePagination = ({
  totalPages,
  hooksPerPage,
  hooksData,
  setHooksData,
  onPageChange,
}) => {
  return (
    <div id="pagination">
      <Pagination
        initialPage={1}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default HooksPagePagination;
