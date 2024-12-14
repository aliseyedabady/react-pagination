import React from "react";
import Pagination from "./components/pagination";

const App = () => {
  return (
    <div>
      <Pagination onPageChange={() => {}} currentPage={1} totalPages={10} />
    </div>
  );
};

export default App;
