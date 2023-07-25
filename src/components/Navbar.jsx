import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className=" relative flex justify-between items-center bg-blue-950 h-[90px] text-sky-500 px-8">
				<div className="flex-1">
					<NavLink to="/" className=" whitespace-nowrap text-3xl font-semibold bg-transparent px-4 py-2">
						NODE AUTH
					</NavLink>
				</div>

				{/* Desktop Menu items */}
				<ul className=" hidden lg:flex justify-between items-center flex-1">
					<li>
						<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="about-us" className={({ isActive }) => (isActive ? "active" : "pending")}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to="articles" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Articles
						</NavLink>
					</li>
					<li>
						<NavLink to="projects" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="contact-us" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Contact
						</NavLink>
					</li>
				</ul>

				{/* <ul className="absolute top-[90px] left-0 w-full z-50 lg:hidden">
					<li>
						<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="about-us" className={({ isActive }) => (isActive ? "active" : "pending")}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to="articles" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Articles
						</NavLink>
					</li>
					<li>
						<NavLink to="projects" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="contact-us" className={({ isActive }) => (isActive ? "active" : "pending")}>
							Contact
						</NavLink>
					</li>
				</ul> */}

				<div className=" hidden lg:flex justify-end items-center gap-4 flex-1">
					<NavLink className="bg-sky-500 text-white text-base px-4 py-2 rounded w-32 text-center" to="login">
						Login
					</NavLink>
					<NavLink className="bg-white text-sky-500 text-base px-4 py-2 rounded w-32 text-center" to="signup">
						Register
					</NavLink>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
