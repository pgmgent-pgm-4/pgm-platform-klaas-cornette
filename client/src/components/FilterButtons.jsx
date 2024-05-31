import React, { useState } from 'react';

const FilterButtons = ({ filters, handleFilterChange, cardColors }) => {
    const [active, setActive] = useState("")
    console.log(active)
    console.log(filters[0].value)
    
    return (
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`${index === 0 && filter.value !== "backend" ? 'bg-custom-darkblue text-white' : `${cardColors[index % cardColors.length]} text-blue-900`} border-4 py-2 px-4 rounded-md shadow-sm hover:opacity-75 focus:outline-none ${filter.value === active ? "border-blue-900" : "border-none"}`}
                    onClick={() => {
                        handleFilterChange(filter.value)
                        if(index === 0 && filter.value === "backend"){
                            setActive("backend")
                        }
                        if(index === 1 && filter.value === "frontend"){
                            setActive("frontend")
                        }
                        if(index === 2 && filter.value === "all subjects"){
                            setActive("all subjects")
                        }
                    }}
                >
                    {filter.name}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
