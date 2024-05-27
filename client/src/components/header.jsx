import React from "react";

const Header = ({ title, photo }) => {
 

  return (
    <div className="bg-cutom-darkblue min-w-screen mb-16">
      <div className="relative max-w-custom-1440 mx-auto">
        <img src="/img/header.svg" alt="Header" className="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-6xl font-semibold text-white text-center">
              {title}
            </h1>
          </div>
      
      </div>
    </div>
  );
};

export default Header;
