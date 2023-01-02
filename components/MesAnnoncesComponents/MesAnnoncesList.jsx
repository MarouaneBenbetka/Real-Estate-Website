import React from "react";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { BiTrash } from "react-icons/bi";
import Image from "next/image";
import { annouces } from "../../data/data";

const MesAnnoncesList = () => {
  function AccordionControl(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Accordion.Control {...props} />
        <ActionIcon
          size="lg"
          onClick={(e) => {
            document.querySelector('[id="my-modal2"]').click();
            console.log(props.data);
            document.querySelector(".confirm").setAttribute("data", props.data);
            //add the modal of suppression to confirm eiher I will supress or not and fix the toast
            // add in igl the content of the about us page
          }}
        >
          <BiTrash size={24} color="#d92525"></BiTrash>
        </ActionIcon>
      </Box>
    );
  }

  const annonces = annouces;

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal2"
        defaultChecked={false}
        className="modal-toggle"
      />
      <div className="modal hero lg:min-w-xl" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Voulez vous supprimer cette annonce !
          </h3>
          <p className="py-4">
            une fois que vous supprimer cette annonce vous ne pourez plus la recuperer
          </p>
          <div className="modal-action">
            <a
              href="#"
              className="btn bg-purple border-purple confirm"
              onClick={(e) => {
                document.querySelector('[id="my-modal2"]').click();
                dispatch(deleteDonation(e.target.getAttribute("data")));
                toast.success("Annonce supprimee avec usc");

                // dispatch(donationAdapter(removeOne(e.target.getAttribute('data'))))
              }}
            >
              Confirmer
            </a>
            <a
              href="#"
              className="btn bg-[#d92525] border-[#d92525]"
              onClick={(e) => {
                document.querySelector('[id="my-modal2"]').click();
              }}
            >
              Anuller
            </a>
          </div>
        </div>
      </div>
      <Accordion>
        {annonces?.map((annonce) => (
          <Accordion.Item value={annonce.description} key={annonce.id}>
            <AccordionControl
              icon={
                <div className="avatar">
                  <div className=" overflow-hidden ">
                    <Image
                      src={annonce.images[0]}
                      width={40}
                      height={40}
                      alt="annonce"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              }
              data={annonce.id}
            >
              {annonce.description}
            </AccordionControl>
            <Accordion.Panel>here is an element </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default MesAnnoncesList;
