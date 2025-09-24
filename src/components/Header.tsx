"use client";
import Image from "next/image";
// import { useState, useEffect } from "react";

export default function Header() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  return (
    <header className="header-main">
      <Image src="/logo.png" alt="logo" className="logo" width={200} height={70} />
      {/* <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="primary-btn toggle-btn"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button> */}
    </header>
  );
}
