import React from "react";

const Header = ({ title, subtitle }) => {
    if (subtitle.length > 300) {
        return (
            <div className="bg-custom-darkblue min-w-screen min-h-96 mb-16">
                <div className="relative max-w-custom-1440 mx-auto">
                    <img src="/img/background2.svg" alt="Header" className="min-h-96 object-cover w-0 sm:w-custom-1440" />
                    
                        <div className="absolute inset-0 flex flex-col justify-start mt-20">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-custom-lightblue">
                                {title}
                            </h1>
                            <p className="mb-8 text-xs font-normal text-gray-300 lg:text-base xl:text-xl">{subtitle}</p>
                        </div>
                  
                    
                </div>
            </div>
        );
    }

    return (
        <div className="bg-custom-darkblue min-w-screen mb-16">
            <div className="relative max-w-custom-1440 mx-auto">
                <img src="/img/header.svg" alt="Header" className="" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-custom-lightblue text-center">
                        {title}
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 text-center lg:text-xl sm:px-16 lg:px-48">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
