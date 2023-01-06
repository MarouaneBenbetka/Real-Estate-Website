import React, { useEffect, useState, useLayoutEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./ControlComponents/FormikControl";
import { comm, options1, options2, options3 } from "./AddAnnonceData";
import { toast } from "react-toastify";
import axios from "axios";
import annonceCrud from "../../utils/services/annonce";
import { useSession } from "next-auth/react";

const AddAnnonce = () => {
  const status = "loading";
  const {  data: session } = useSession();

  
  const initialValues = {
    description: "",
    commune: "",
    typeImmoblier: "",
    typeAnnonce: "",
    prix: "",
    wilaya: "Adrar",
    address: "",
    images: "",
  };

  const validationSchema = Yup.object({
    wilaya: Yup.string().required("Required"),
    commune: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    typeImmobilier: Yup.string().required("Required"),
    typeAnnonce: Yup.string().required("Required"),
    prix: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
    // images: Yup.mixed()
    //   .required("Required")
    //   .test(
    //     "FILE_SIZE",
    //     "Too big image!",
    //     (value) => value && value.size < 1024 * 1024
    //   )
    //   .test(
    //     "FILE_TYPE",
    //     "Invalid!",
    //     (value) => value && ["image/png", "image/jpeg"].includes(value.type)
    //   ),
  });

  const onSubmit = async (values, onSubmitProps) => {
    console.log("hiiiiii")
    const links = []
    const button = document.querySelector("[type=submit]");
    button.innerText = "";
    button.classList.add("loading");
    console.log(values)
    console.log(values.images.length)
    console.log(values.images[0])


      const { wilaya, commune, description, typeImmobilier, tyoeAnnonce, address } = values;
    //   console.log("Form data", { donator: user_id, ...values });
      try {

        for (let i = 0; i < values.images.length; i++) {
          console.log(values)
          let formdata = new FormData();
          // const file = values.image[i];
          console.log(values.images[i])
          formdata.append("file", values.images[i]);
        
        formdata.append("upload_preset", "myUploads");
        console.log(formdata);                   

        let result = await axios.post(
          "https://api.cloudinary.com/v1_1/dsliesrpf/image/upload",
          formdata
        );
        console.log(result.data.secure_url);

        links.push(result.data.secure_url)

      }

      // const response = await annonceCrud.post({ wilaya, commune, description, typeImmobilier, tyoeAnnonce, address, images:links }, {  headers: {
      //   'Authorization': `Bearer ${session.user.jwt}` 
      // }})

        onSubmitProps.setSubmitting(false);
        button.classList.remove("loading")
        button.innerText = "Submit"
        onSubmitProps.resetForm();

      } catch {
        (error) => {
          toast.error(error.name);
          console.log(error);
        };
      }

    //second

    //   document.querySelector("#my-modal").click();
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "/api/auth/register",
    //     { email, password },
    //     config
    //   );
    //   console.log(data);
  };

  return (
    <div className="card flex-shrink-0  w-full shadow-2xl bg-white">
      <label
        htmlFor="my-modal1"
        className="btn btn-sm btn-circle absolute right-3 top-3 bg-[#d92525] border-[#d92525] hover:bg-[#d92525] hover:border-[#d92525] text-white"
      >
        ✕
      </label>
      <div className="card-body ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {


            return (
              <Form>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="description"
                    formik={formik}
                    placeholder="Entrer une Description de l'annonce"
                  />

                  <FormikControl
                    control="select"
                    label="Type"
                    name="typeImmobilier"
                    options={options1}
                  />
                  <FormikControl
                    control="select"
                    label="Categorie"
                    name="typeAnnonce"
                    options={options2}
                  />
                  <FormikControl
                    control="select"
                    label="Wilaya"
                    name="wilaya"
                    options={options3}
                  />
                  <FormikControl
                    control="select"
                    label="Commune"
                    name="commune"
                    options={comm[formik.values.wilaya]}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Address"
                    name="address"
                    formik={formik}
                    placeholder="cite 1000 LOGTS"
                  />
                  <FormikControl
                    control="input"
                    type="number"
                    label="Prix"
                    name="prix"
                    formik={formik}
                    placeholder="50000 da"
                  />
                
                  <div className="form-control">
                    <label className="label" htmlFor="image">
                      <span className="label-text  text-lg">Image</span>
                    </label>
                    <input
                      type="file"
                      alt="image"
                      id="image_input"
                      aria-describedby="file_input_help"
                      accept="image/*"
                      name="image"
                      className="file-input file-input-bordered w-full file-input-md file-input-accent file-selector-button:bg-primary bg-white"
                      onChange={(e) => {
                        formik.setFieldValue("images", e.target.files);
                      }}
                      multiple={true}
                    />
                  </div>
                </div>
                <div
                  className={`form-control mt-6 md:mt-12 ${
                    status === "loading" ? "loading" : ""
                  }`}
                >
                  <button
                    className={`btn btn-wide  hover:bg-white2 hover:border-purple hover:text-purple mx-auto  bg-purple border-purple ${
                      status === "pending_save" ? "loading" : ""
                    }`}
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );

};

export default AddAnnonce;
