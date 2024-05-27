import logo from "./logo.svg";
import "./App.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Root from "./layouts/Root";
import { Blog, BlogPost, HomePage, NotFound, ProgrammaPage, PortfolioPage } from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<NotFound />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/programma" element={< ProgrammaPage/>} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<BlogPost />} />
			<Route path="/portfolio" element={<PortfolioPage />} />
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
