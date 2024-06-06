import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <Box className="flex-grow">
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
}
