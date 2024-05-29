import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<>
			<NavBar />
				<Box>
					<Outlet />
				</Box>
		</>
	);
}
