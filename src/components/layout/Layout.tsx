import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Check for saved theme preference or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else if (savedTheme === "dark" || prefersDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen galaxy-background dark:bg-gray-900">
      {/* Galaxy particles */}
      <div className="galaxy-stars"></div>
      <div className="galaxy-stars galaxy-stars-small"></div>
      <div className="galaxy-stars galaxy-stars-medium"></div>
      
      {/* Nebula effects */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;