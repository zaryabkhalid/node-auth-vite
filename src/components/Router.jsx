import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Home, About, Articles, Projects, Contact, Registeration, Login, ForgetPassword } from "../pages";

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
				<Route path="forget-password" element={<ForgetPassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
