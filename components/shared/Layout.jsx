import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import GoggleRegisterForm from "../formComponents/GoggleRegisterForm";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import userCrud from "../../utils/services/user";

function Layout({ children }) {
  const [isNewUser, setIsNewUser] = useState(null);

  const { status, data: session } = useSession();
  const checkIfNewUser = async (id) => {
    const response = await userCrud.get(id,{headers:{'Authorization': `Bearer ${session.user.jwt}`}});
    console.log(response);
    const isNewUser = response.data.data.isValid;
    return isNewUser;
  };

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        const result = await checkIfNewUser(session?.user.id);
        setIsNewUser(result);
        console.log(isNewUser);
      };
      fetchData();
    }
  }, [session,isNewUser]);
  return (
    <div className="text-dark-blue font-libre-franklin">
      <input
        type="checkbox"
        id="my-modal5"
        defaultChecked={isNewUser !== null ? !isNewUser : false}
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
