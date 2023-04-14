import React from "react";
const Navbar = () => {
  let Links = [
    { name: "Book store", link: "/" },
    { name: "Your Book", link: "/" },
    { name: "Histories", link: "/" },
  ];
  return (
    <div className="shadow-md w-full relative top-0 left-0">
      <div className="md:flex bg-gray items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3x1 text-indigo-600 mr-1 pt-2">
            BOOKGALLERY
          </span>
        </div>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl">
              <a href={link.link} className="text-gray-800 hover:text-gray-400">
                {" "}
                {link.name}{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
