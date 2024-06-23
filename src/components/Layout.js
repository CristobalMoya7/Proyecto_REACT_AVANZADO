import Header from "./Header";
import Footer from "./Footer";
import { children } from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
