import React from "react";
import Skeleton from "tiny-skeleton-loader-react";

export default function IconsPageLoading() {
  return (
    <div className="icons">
      {Array(100)
        .fill(null)
        .map((c, i) => (
          <div className="item" key={i}>
            <Skeleton height="60px" />
            <div className="name">
              <Skeleton height="15px" />
            </div>
          </div>
        ))}
    </div>
  );
}
