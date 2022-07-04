import React from "react";

import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#dedede"
    foregroundColor="#e8d3ca"
  >
    <circle cx="136" cy="136" r="136" />
    <rect x="0" y="295" rx="13" ry="13" width="280" height="30" />
    <rect x="0" y="344" rx="16" ry="16" width="280" height="88" />
    <rect x="22" y="446" rx="18" ry="18" width="96" height="29" />
    <rect x="145" y="443" rx="9" ry="9" width="116" height="35" />
  </ContentLoader>
);

export default Skeleton;
