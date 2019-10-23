import React from "react";
import Skeleton from "tiny-skeleton-loader-react";

function IconsetPageLoading() {
  const commonSpacing = { marginBottom: "1rem" };

  return (
    <div>
      <Skeleton width="60%" height="43px" style={commonSpacing} />
      <Skeleton width="40%" height="64px" style={commonSpacing} />
      <Skeleton width="16%" height="32px" style={commonSpacing} />
      <Skeleton height="47px" style={commonSpacing} />
      <Skeleton width="16%" height="32px" style={commonSpacing} />
      <div className="icons">
        {Array(20)
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
    </div>
  );
}

export default IconsetPageLoading;
