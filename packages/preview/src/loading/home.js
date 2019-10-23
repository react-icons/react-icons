import React from "react";
import Skeleton from "tiny-skeleton-loader-react";

export default function HomePageLoading() {
  const commonSpacing = { marginBottom: "1rem" };

  return (
    <div>
      <Skeleton width="170px" height="43px" style={commonSpacing} />
      <div style={commonSpacing}>
        <Skeleton
          width="80px"
          block={false}
          height="20px"
          style={{ marginRight: "0.5rem" }}
        />
        <Skeleton width="80px" block={false} height="20px" />
      </div>
      <Skeleton height="18px" style={commonSpacing} />
      <Skeleton width="170px" height="28px" style={commonSpacing} />
      <Skeleton height="47px" style={commonSpacing} />
      <Skeleton width="170px" height="28px" style={commonSpacing} />
      <Skeleton height="137px" style={commonSpacing} />
      <Skeleton width="170px" height="28px" style={commonSpacing} />
      <Skeleton width="76px" block={false} height="20px" />
    </div>
  );
}
