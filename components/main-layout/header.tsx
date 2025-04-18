import Nav from "./nav";

function Header() {
	return (
		<header className="p-2 md:p-4 flex justify-between items-center">
			<h1 className="font-bold text-md-xl-clamp-md-lg">Boilerplate APP</h1>
			<Nav />
		</header>
	);
}

export default Header;
