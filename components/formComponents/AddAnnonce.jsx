import React, { useEffect, useState, useLayoutEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./ControlComponents/FormikControl";
import {comm, options1,options2,options3} from "./AddAnnonceData"

const AddAnnonce = () => {
  const status = "loading";
  
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
    typeImmoblier: Yup.string().required("Required"),
    typeAnnonce: Yup.string().required("Required"),
    prix: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
    images: Yup.mixed()
      .required("Required")
      .test(
        "FILE_SIZE",
        "Too big image!",
        (value) => value && value.size < 1024 * 1024
      )
      .test(
        "FILE_TYPE",
        "Invalid!",
        (value) => value && ["image/png", "image/jpeg"].includes(value.type)
      ),
  });

  const onSubmit = async (values, onSubmitProps) => {
    const button = document.querySelector("[type=submit]");
    button.innerText = "";
    button.classList.add("loading");
    //   const { sex, title, description, color, state, image } = values;
    //   console.log("Form data", { donator: user_id, ...values });
    //   const formdata = new FormData();
    //   try {
    //     formdata.append("file", values.image);
    //     formdata.append("upload_preset", "myUploads");
    //     console.log(formdata);
    //     const result = await axios.post(
    //       "https://api.cloudinary.com/v1_1/dsliesrpf/image/upload",
    //       formdata
    //     );
    //     console.log(result.data.secure_url);
    //     dispatch(
    //       saveDonation({
    //         sex,
    //         donator: user_id.user_id,
    //         image:
    //           result.data.secure_url.slice(0, 50) +
    //           "ar_2.0,c_crop/" +
    //           result.data.secure_url.slice(50),
    //         title,
    //         description,
    //         color,
    //         state,
    //       })
    //     );
    //     onSubmitProps.setSubmitting(false);
    //     button.classList.remove("loading")
    //     button.innerText = "Submit"
    //     onSubmitProps.resetForm();

    //   } catch {
    //     (error) => {
    //       toast.error(error.name);
    //       console.log(error);
    //     };
    //   }

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
                  {/* <FormikControl
                    control="input"
                    type="text"
                    label="Descrption"
                    name="description"
                    formik={formik}
                    placeholder="Title"
                  /> */}

                  <FormikControl
                    control="textarea"
                    label="Description"
                    name="description"
                    formik={formik}
                    placeholder="Entrer une Description de l'annonce"
                  />

                  {/* <FormikControl
                    control="input"
                    type="text"
                    label="Phone Number"
                    name="phoneNum"
                    formik={formik}
                  /> */}
                  {/* <FormikControl
                    control="input"
                    type="text"
                    label="Color"
                    name="color"
                    formik={formik}
                    placeholder="Bleu"
                  /> */}
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
                    control="number"
                    label="Prix"
                    name="prix"
                    formik={formik}
                    placeholder="50000 da"
                  />
                  <div>
                    {/* <FormikControl
                      control="input"
                      type="range"
                      min="0"
                      max="5"
                      label="State"
                      name="state"
                      formik={formik}
                    /> */}
                    {/* <div className="w-full flex justify-between text-xs px-2">
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                    </div> */}
                  </div>

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
                        formik.setFieldValue("image", e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`form-control mt-6 md:mt-12 ${
                    status === "loading" ? "loading" : ""
                  }`}
                >
                  <button
                    className={`btn btn-primary bg-primary hover:bg-darkPrimary mx-auto btn-wide ${
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
