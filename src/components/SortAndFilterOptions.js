import React from "react";

const SortAndFilterOptions = props => {
  return (
    <div>
      <div>
        {" "}
        Sort By:
        <button onClick={() => props.setSortType("DEFAULT")}> Default </button>
        <button onClick={() => props.setSortType("ABC")}> ABC </button>
        <button onClick={() => props.setSortType("HP")}> HP </button>
      </div>
    </div>
  );
};

export default SortAndFilterOptions;
