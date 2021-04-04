import React, { useState } from "react";
import * as styles from "../../styles/modules/pagination.module.scss";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentProduct,
}) => {
  const pageNumbers = [];
  const [active, setActive] = useState(currentProduct);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevious = () => {
    if (pageNumbers.length > 1) {
      if (active > 2) {
        paginate(currentProduct - 1);
      }
    }
  };

  const onNext = () => {
    if (pageNumbers.length > 1) {
      paginate(currentProduct + 1);
    }
  };

  return (
    <div className="row" id={styles.pagination}>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item me-2">
            <button
              onClick={() => onPrevious()}
              className="page-link"
              href="/"
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li className="page-item me-2" key={number}>
              <button
                className={`page-link ${active === number ? "active" : ""} `}
                href="/"
              >
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              onClick={() => onNext()}
              className="page-link"
              href="/"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
