import React from "react";
import { Link } from "react-router-dom";

export default function TeamCard({ url, firstName, lastName, githubName, id }) {
    return (
        <div>
            <Link to={`/team/${id}`}>
                <div className="rounded-2xl w-96 shadow-2xl p-8 bg-gradient-to-r from-custom-darkblue to-blue-300 hover:shadow-lg transform hover:scale-95 transition-transform duration-200 ease-in-out">
                    <div className="flex justify-center my-6">
                        <img src={url} alt={firstName} className="w-64 h-64 object-cover rounded-full" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-white">
                            {firstName} {lastName}
                        </h2>
                        <p className="mt-4 text-lg text-gray-900">{githubName}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
