import React from "react";
import Footer from "./footer.component";
import Navbar from "./navbar.component";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
