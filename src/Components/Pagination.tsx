/* eslint-disable @typescript-eslint/no-explicit-any */
const Pagination = ({
  currentPage,
  setCurrentPage,
  nextItems,
}: {
  currentPage: number;
  setCurrentPage: any;
  nextItems: any[];
}) => {
  return (
    <div className="flex justify-between">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((page: number) => page - 1)}
      >
        Previous
      </button>
      <button
        disabled={nextItems.length === 0}
        onClick={() => setCurrentPage((page: number) => page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
