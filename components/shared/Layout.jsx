import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GoggleRegisterForm from "../formComponents/GoggleRegisterForm"
import { useEffect, useState } from "react";

function Layout({ children }) {

	const [isNewUser, setIsNewUser] = useState(null);

	return (
		<div className="text-dark-blue font-libre-franklin">
			      <input
        type="checkbox"
        id="my-modal5"
        defaultChecked={isNewUser !== null ? !isNewUser: false}
        className="modal-toggle"
      />
      <div className="modal hero lg:min-w-xl" id="my-modal-5">
        <div className="">
          <GoggleRegisterForm />
        </div>
      </div>
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
