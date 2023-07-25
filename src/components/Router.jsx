import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Articles from "../pages/Articles";
import Projects from "../pages/Projects";
import Login from "../pages/Login";
import Registeration from "../pages/Registeration";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path="about-us" element={<About />} />
					<Route path="articles" element={<Articles />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact-us" element={<Contact />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Registeration />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
