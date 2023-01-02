import React from "react";
import { Accordion, ActionIcon, Box } from "@mantine/core";
import { BiTrash } from "react-icons/bi";
import Image from "next/image";
import { annouces } from "../../data/data";
import TableRow from "./TableRow";

const MesAnnoncesList = () => {


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
      <div className="overflow-x-auto w-full mx-auto mt-8">
      <table className=" table mx-auto w-full border-1 border-darkPrimary bg-white ">
        <thead className="bg-white">
          <tr className="text-center bg-white">
            <th className="text-left sm:pl-28">Annonce</th>
            <th>Localisation</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {annonces?.map((annonce) => (
            
            <TableRow 
            key={annonce.id}
            description={annonce.description}
            typeAnnonce={annonce.typeAnnoce}
            typeImmoblier={annonce.typeImmoblier}
            typePayment={annonce.typePayment}
            prix={annonce.prix}
            wilaya={annonce.wilaya}
            datePublication={annonce.datePublication}
            image={annonce.images[0]}
            id={annonce.id}
            
            />
        
          ))}
        </tbody>
      </table>
    </div>
      {/* <Accordion>
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
            <Accordion.Panel> 
            <TableRow 
            description={annonce.description}
            typeAnnoce={annonce.typeAnnoce}
            typeImmoblier={annonce.typeImmoblier}
            typePayment={annonce.typePayment}
            prix={annonce.prix}
            wilaya={annonce.wilaya}
            datePublication={annonce.datePublication}
            image={annonce.images[0]}
            id={annonce.id}
            
            />
              </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion> */}
    </div>
  );
};

export default MesAnnoncesList;
