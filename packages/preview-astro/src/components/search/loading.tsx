import React from "react";
import Skeleton from "tiny-skeleton-loader-react";

export default function SearchPageIconLoading() {
  return (
    <div className="item">
      <Skeleton height="60px" />
      <div className="name">
        <Skeleton height="15px" />
      </div>
    </div>
  );
}
