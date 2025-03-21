import React from "react";

interface badgeProps {
  content: string;
}

const BadgeInfo: React.FC<badgeProps> = ({ content }) => {
  return (
    <small className="badge_category px-2 py-1 font-black text-white  rounded-md">
      {content}
    </small>
  );
};

export default BadgeInfo;
