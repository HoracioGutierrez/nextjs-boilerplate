import Nav from "./nav";

function Header() {
	return (
		<header className="px-3-4-clamp py-1-2-clamp flex justify-between items-center">
			<h1 className="font-bold clamp-[text,16px,24px]">Boilerplate APP</h1>
			<Nav />
		</header>
	);
}

export default Header;
