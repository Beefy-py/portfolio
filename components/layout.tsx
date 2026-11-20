import React from "react";
import Footer from "./footer.component";
import Navbar from "./navbar.component";

type Props = {
  children: React.ReactNode;
};

// Faint column rules behind the page, like the guides of an editorial grid.
const GridLines = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    <div className="container-site grid h-full grid-cols-2 lg:grid-cols-4">
      {[0, 1, 2, 3].map((col) => (
        <div
          key={col}
          className={`h-full border-l hairline ${col > 1 ? "hidden lg:block" : ""} ${
            col === 1 ? "border-r lg:border-r-0" : ""
          } ${col === 3 ? "lg:border-r" : ""}`}
          style={{ opacity: 0.6 }}
        />
      ))}
    </div>
  </div>
);

const Layout = ({ children }: Props) => {
  return (
    <>
      <GridLines />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
