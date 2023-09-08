import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import {
	Home,
	About,
	Articles,
	Projects,
	Contact,
	Registeration,
	Login,
	ForgetPassword,
} from "../pages";

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route path="" element={<Home />} />
			<Route path="about-us" element={<About />} />
			<Route path="articles" element={<Articles />} />
			<Route path="projects" element={<Projects />} />
			<Route path="contact-us" element={<Contact />} />
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<Registeration />} />
			<Route path="forget-password" element={<ForgetPassword />} />
		</Route>
	)
);

export default Router;
