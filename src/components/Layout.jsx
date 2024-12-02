import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="pt-20">{children}</main>
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} Travel Planner. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
