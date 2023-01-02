import React from "react";
import { BiTrash } from "react-icons/bi";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function TableRow({
  description,
  typeImmoblier,
  typeAnnonce,
  typePayment,
  prix,
  wilaya,
  datePublication,
  image,
  id,
}) {
  const { status, data: session } = useSession();
  console.log(session);
  console.log(datePublication,"date pub")

  return (
    <>
      {/* <tr className={`${email === session?.user.email ? "hidden" : ""}`}>
        <td className="bg-white">
          <div className="flex items-center space-x-3  lg:pl-8 bg-white">
            <div className="bg-white">
              <div className="font-bold">{description}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td className="flex justify-center bg-white">{phoneNum}</td>
        <td className="bg-white">
          <div className="flex justify-center">
            <button
              className="btn btn-success text-white btn-sm hover:bg-white hover:border-darkPrimary hover:text-darkPrimary border-1 flex items-center"
              onClick={(e) => {
                e.preventDefault();
                dispatch(AcceptRequest(id));
                toast.success("You donated successfully a Frame");
              }}
            >
              accept
              <BiCheckDouble size={18}></BiCheckDouble>
            </button>
          </div>
        </td>
      </tr> */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <Image
                  src={image}
                  width={40}
                  height={40}
                  alt="annonce"
                  className="object-cover rounded-xl"
                />{" "}
              </div>
            </div>
            <div>
              <div className="font-bold">{description}</div>
              <div className="text-sm opacity-50">{datePublication}</div>
            </div>
          </div>
        </td>
        <td>
          {typeAnnonce},{typeImmoblier},{wilaya}
          <br />
          <span className="badge badge-ghost badge-sm">{prix}</span>
        </td>
        <td>{typePayment}</td>
        <th>
          <button
            onClick={(e) => {
              document.querySelector('[id="my-modal2"]').click();
              console.log(props.data);
              document
                .querySelector(".confirm")
                .setAttribute("data", props.data);
              //add the modal of suppression to confirm eiher I will supress or not and fix the toast
              // add in igl the content of the about us page
            }}
          >
            <BiTrash size={24} color="#d92525"></BiTrash>
          </button>
        </th>
      </tr>
    </>
  );
}
