import { BiPlus } from "react-icons/bi";
import AddAnnonce from "../components/formComponents/AddAnnonce";
import MesAnnoncesList from "../components/MesAnnoncesComponents/MesAnnoncesList";
import {isLogin} from "../utils/services/auth"
import { getSession } from "next-auth/react"


const MesAnnonces = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className=" min-h-[120px] bg-center flex flex-col justify-end">
        <div className="  min-h-[120px]">
          {" "}
          <div className="max-w-[1920px] mx-auto flex justify-center pt-8">
            <h1 className="font-bold text-[48px] text-black ml-4 text-center md:text-left border-purple pl ">
              Toutes les annonces
            </h1>{" "}
          </div>
        </div>
      </div>
      <input
        type="checkbox"
        id="my-modal1"
        defaultChecked={false}
        className="modal-toggle"
      />
      <div className="modal hero lg:min-w-xl">
        <div className="hero-content md:w-5/6 relative">
          <AddAnnonce />
        </div>
      </div>
      <div className="overflow-x-auto w-full px-4 py-6 min-h-[400px]">
        <div className="flex-col md:flex-row  gap-4 flex w-full items-center justify-center">
          <div
            htmlFor="addDon"
            className={`btn bg-purple border-purple text-white`}
            onClick={() => {
              document.querySelector('[id="my-modal1"]').click();
            }}
          >
            Add a donation <BiPlus></BiPlus>
            <input
              type="checkbox"
              id="my-modal1"
              defaultChecked={false}
              className="modal-toggle"
            />
          </div>
        </div>
        <MesAnnoncesList />
      </div>
    </div>
  );
};

export default MesAnnonces;

export async function getServerSideProps({ req }) {
	const session = await getSession({ req })

  isLogin(req);
  return {
    props: { session }
  }
}
