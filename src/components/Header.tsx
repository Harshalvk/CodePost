import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-gray-100 p-8 dark:bg-gray-800">{children}</div>;
};

export default Header;
