import { MdAdd } from "react-icons/md";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import style from "./Customer.module.css";
import { useState } from "react";

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const lastPage = 50;

  const IncrementPage = () => {
    if (page >= lastPage) return;
    setPage(page + 1);
  };

  const GetLastPage = () => {
    setPage(lastPage);
  };

  const PreviousPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const GetFirstPage = () => {
    setPage(1);
  };
  return (
    <div className={style.wrapper}>
      <button
        className={`${style.button_success}`}
        type="button"
        title="Create"
      >
        <MdAdd size={15} title="Create" />
      </button>
      <button
        className={style.button_primary}
        onClick={GetFirstPage}
        type="button"
        title="First Page"
      >
        <GrChapterPrevious size={15} />
      </button>
      <button
        className={style.button_primary}
        onClick={PreviousPage}
        type="button"
        title="Previous Page"
      >
        <GrCaretPrevious size={15} />
      </button>
      <div className={style.pagination_container}>
        <span>Page {page} of 50</span>
      </div>
      <button
        className={style.button_primary}
        onClick={IncrementPage}
        type="button"
        title="Next Page"
      >
        <GrCaretNext size={15} />
      </button>
      <button
        className={style.button_primary}
        onClick={GetLastPage}
        type="button"
        title="Last Page"
      >
        <GrChapterNext size={15} />
      </button>
    </div>
  );
};
