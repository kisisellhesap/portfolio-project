import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MainLayout = () => {
  const [isDark, setIsDark] = useState(() => {
    return JSON.parse(localStorage.getItem("themeMode")) ?? false;
  });
  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(isDark));
  }, [isDark]);
  const x = useLocation();
  const title = x.pathname.replace("/", "");
  document.title = title === "" ? "about" : title;

  return (
    <main
      className={
        isDark
          ? " min-h-screen bg-black text-white min-w-[400px]"
          : "min-h-screen bg-white text-black min-w-[400px]"
      }
    >
      <div className="max-w-[992px] m-auto max-lg:mx-4 min-h-screen  flex flex-col">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
