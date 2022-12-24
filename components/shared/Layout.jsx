import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({children}) {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
