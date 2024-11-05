import React from "react";
import { Button } from "../button";

function Header() {
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" alt="Logo" className="w-12 h-auto" />
      <div className="bg-[#6ec56b] text-white align-middle rounded-lg">
        <Button variant="link">Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
