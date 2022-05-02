import { useState } from "react";

import { AnimeSidebar } from "./AnimeSidebar";

import "./AnimeSidebar.css";

export const AnimeSidebarContainer = () => {
  const [isOpen, setOpen] = useState(false);

  return <AnimeSidebar isOpen={isOpen} setOpen={setOpen} />;
};
