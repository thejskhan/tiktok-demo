import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			{/* <header className="fixed top-0 w-full bg-light z-10 border-b border-line">
				<nav className="w-full max-w-screen-xl mx-auto h-16 flex items-center">
					<span className="font-semibold">Doxic Spawn</span>
				</nav>
			</header> */}
			<main className="w-full mx-auto">
				<Outlet />
			</main>
		</>
	);
}
