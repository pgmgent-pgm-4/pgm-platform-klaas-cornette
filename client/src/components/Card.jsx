import React from "react";
import { Link } from "react-router-dom";

export default function Card({ imgUrl, imgAlt, studyPoints, title, hours, color, subtitle, page }) {
    return (
        <Link to={page}>
            <div className={`w-96 rounded overflow-hidden shadow-lg ${color} m-2 rounded-t-15px`}>
                <img src={imgUrl} alt={imgAlt} className="w-full h-48 object-cover" />
                <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <h3 className="text-gray-600 p-6 pt-3">{subtitle}</h3>
                </div>
                {studyPoints ? (
                    <div className="flex justify-between p-6 pt-3">
                        <p className="text-gray-600">{studyPoints}sp</p>
                        <p className="text-gray-600">{hours}u/w</p>
                    </div>
                ) : null}
            </div>
        </Link>
    );
}
