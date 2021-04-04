import * as React from "react";
import * as styles from "../../styles/modules/loading.module.scss";

const LoadingProduct = () => {
  return (
    <>
      <div className={`p-0 ${styles.loading}`}>
        <div />
        <div className="row m-0 px-3">
          <div className="col-7 d-flex flex-column justify-content-between p-0">
            <div />
            <div className="mt-3" />
          </div>
          <div className="col d-flex flex-column justify-content-between align-items-end p-0">
            <div />
            <div className="mb-2"/>
          </div>
        </div>
      </div>
      <div className={`p-0 ${styles.loading}`}>
        <div />
        <div className="row m-0 px-3">
          <div className="col-7 d-flex flex-column justify-content-between p-0">
            <div />
            <div className="mt-3" />
          </div>
          <div className="col d-flex flex-column justify-content-between align-items-end p-0">
            <div />
            <div className="mb-2"/>
          </div>
        </div>
      </div>
      <div className={`p-0 ${styles.loading}`}>
        <div />
        <div className="row m-0 px-3">
          <div className="col-7 d-flex flex-column justify-content-between p-0">
            <div />
            <div className="mt-3" />
          </div>
          <div className="col d-flex flex-column justify-content-between align-items-end p-0">
            <div />
            <div className="mb-2"/>
          </div>
        </div>
      </div>
      <div className={`p-0 ${styles.loading}`}>
        <div />
        <div className="row m-0 px-3">
          <div className="col-7 d-flex flex-column justify-content-between p-0">
            <div />
            <div className="mt-3" />
          </div>
          <div className="col d-flex flex-column justify-content-between align-items-end p-0">
            <div />
            <div className="mb-2"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingProduct;
