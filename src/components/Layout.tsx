// src/components/Layout.tsx
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">  {/* Add pt-16 here */}
        {children}
      </main>
      <Footer />
    </div>
  );
};
