import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
	return (
		<div className="text-dark-blue font-libre-franklin">
			<div>
				<Navbar />
			</div>

			<div>{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
