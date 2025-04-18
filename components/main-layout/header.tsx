import Nav from "./nav";

function Header() {
	return (
		<header className="px-3-4-clamp py-1-2-clamp flex justify-between items-center">
			<h1 className="font-bold text-sm-lg-clamp">Boilerplate APP</h1>
			<Nav />
		</header>
	);
}

export default Header;
