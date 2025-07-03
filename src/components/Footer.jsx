import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-800 text-white py-1 mt-auto fixed bottom-0 left-0">
    <div className="container mx-auto text-center text-sm">&copy; {new Date().getFullYear()} Buku Kita. All rights reserved.</div>
  </footer>
);

export default Footer;
