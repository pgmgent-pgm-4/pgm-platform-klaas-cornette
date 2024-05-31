import React from "react";

const Jumbotron = () => {
    return (
            <div className="bg-center bg-no-repeat bg-custom-darkblue bg-blend-multiply">
                <div className="px-4 mx-auto max-w-custom-1440 text-center py-24 lg:py-36" style={{ backgroundImage: 'url(img/background.svg)'}}>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Wij zijn PGM
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Deze 2-jarige opleiding wordt aangeboden in het Nederlands op de Leeuwstraat campus en biedt flexibele mogelijkheden 
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a
                            href="programma"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Ons programma
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                        <a
                            href="opleiding"
                            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                        >
                            Leer ons kennen
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default Jumbotron;
