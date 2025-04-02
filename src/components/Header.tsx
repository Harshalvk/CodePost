import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-zinc-100 p-8 dark:bg-zinc-900">{children}</div>;
};

export default Header;
