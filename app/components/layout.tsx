import { FC } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-6">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
