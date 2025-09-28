import React, { useState, useEffect } from "react";

export function TopBar() {
  const [show, setShow] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true); // scrolling up → show bar
      } else {
        setShow(false); // scrolling down → hide bar
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-red-600`}
    >
      <div className="flex justify-between items-center px-6 py-3 text-white">
        {/* Left side: Request an Estimate */}
        <button className="uppercase tracking-wide font-medium">
          Request an Estimate
        </button>

        {/* Right side: Call Us Now */}
        <a
          href="tel:+15551234567"
          className="uppercase border border-white px-4 py-2 rounded-full hover:bg-white hover:text-red-600 transition font-medium"
        >
          Call Us Now
        </a>
      </div>
    </div>
  );
}
