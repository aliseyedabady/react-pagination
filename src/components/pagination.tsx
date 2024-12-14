import React from "react";
import Left from "./left";
import Right from "./right";
import "./style.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageItem = (page: number, label?: React.ReactNode) => (
    <li
      key={page}
      onClick={() => onPageChange(page)}
      className={"pagination-item " + (currentPage === page ? "active" : "")}
    >
      {label || page}
    </li>
  );

  const renderPages = () => {
    const pages = [
      <li key="left">
        <Left />
      </li>,
    ];

    pages.push(renderPageItem(1));

    const startPage = Math.max(currentPage - 2, 2);
    const endPage = Math.min(currentPage + 2, totalPages - 1);

    if (startPage > 2) {
      pages.push(<li key="dots-before">...</li>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderPageItem(i));
    }

    if (endPage < totalPages - 1) {
      pages.push(<li key="dots-after">...</li>);
    }

    if (totalPages > 1) {
      pages.push(renderPageItem(totalPages));
    }

    pages.push(
      <li key="right">
        <Right />
      </li>
    );
    return pages;
  };

  return (
    <nav className="pagination-wrapper">
      <ul className="pagination-items">{renderPages()}</ul>
    </nav>
  );
};

export default Pagination;
