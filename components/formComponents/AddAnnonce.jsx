import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./ControlComponents/FormikControl";
import { communes, typesAnnonces, typesImmobliers, wilayas } from "./form_data";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { findLocation } from "./ControlComponents/commune_lag_lng";
import annonceCrud from "../../utils/services/annonce";
import { URL } from "../../utils/services/crud";

const LocationPicker2 = dynamic(
	() =>
		import(
			"../../components/formComponents/ControlComponents/LocationPicker"
		),
	{
		ssr: false,
	}
);

const AddAnnonce = ({ onFinishSubmit }) => {
	const env = process.env.NODE_ENV;
	const status = "loading";
	const { data: session } = useSession();

	const initialValues = {
		description: "",
		commune: "",
		typeImmobilier: "",
		typeAnnonce: "",
		prix: "",
		surface: "",
		wilaya: "Alger",
		address: "",
		images: "",
	};

	useEffect(() => {
		axios
			.get(`${URL}/annonces/types`)
			.then((res) => {
				console.log(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// postion for the map location
	const [position, setPosition] = useState({
		lat: "36.7681618",
		lng: "3.0404258",
	});
	const [commune, setCommune] = useState("Alger");

	const validationSchema = Yup.object({
		// wilaya: Yup.string().required("Required"),
		// commune: Yup.string().required("Required"),
		description: Yup.string().required("Required"),
		// typeImmobilier: Yup.string().required("Required"),
		// typeAnnonce: Yup.string().required("Required"),
		prix: Yup.number().required("Required"),
		// address: Yup.string().required("Required"),
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
		console.log("onSubmit", values);
		let links = [];
		const button = document.querySelector("[type=submit]");
		button.innerText = "";
		button.classList.add("loading");

		let {
			wilaya,
			commune,
			description,
			typeImmobilier,
			typeAnnonce,
			address,
			prix,
			surface,
		} = values;

		if (commune == "") commune = communes[wilaya][0].value;
		if (typeAnnonce == "") typeAnnonce = "Vente";

		try {
			for (let i = 0; i < values.images.length; i++) {
				let formdata = new FormData();
				// const file = values.image[i];
				// console.log(values.images[i]);
				formdata.append("file", values.images[i]);
				formdata.append("upload_preset", "ucljorkr");
				// console.log(formdata);
				let result = await axios.post(
					"https://api.cloudinary.com/v1_1/dsliesrpf/image/upload",
					formdata
				);
				// console.log(result.data.secure_url);
				links.push(result.data.secure_url);
			}

			axios
				.post(
					`${URL}/annonces/`,
					{
						wilaya,
						commune,
						description,
						typeId: 1,
						category: typeAnnonce,
						images: links,
						coordinates: position,
						address,
						price: prix,
						surface,
					},
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${session.user.jwt}`,
						},
					}
				)
				.then((res) => {
					onSubmitProps.setSubmitting(false);
					button.classList.remove("loading");
					button.innerText = "Submit";
					onSubmitProps.resetForm();
					document.getElementById("my-modal1").click();
					onFinishSubmit();
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.name);
					onSubmitProps.setSubmitting(false);
					button.classList.remove("loading");
					button.innerText = "Submit";
				});
		} catch {
			toast.error("Connexion echoue");
		}
	};

	return (
		<div className="card flex-shrink-0  w-full shadow-2xl bg-white overflow-y-auto max-h-[95vh]">
			<label
				htmlFor="my-modal1"
				className="btn btn-sm btn-circle absolute right-3 top-3 bg-[#d92525] border-[#d92525] hover:bg-[#d92525] hover:border-[#d92525] text-white"
			>
				✕
			</label>
			<div className="card-body p-4	px-8">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{(formik) => {
						return (
							<Form>
								<div className="md:grid md:grid-cols-2 md:gap-y-1 md:gap-x-6">
									<FormikControl
										control="textarea"
										label="Description"
										name="description"
										formik={formik}
										placeholder="Entrer une Description de l'annonce"
									/>
									<FormikControl
										control="select"
										label="Wilaya"
										name="wilaya"
										options={wilayas}
									/>
									<FormikControl
										control="select"
										label="Type"
										name="typeImmobilier"
										options={typesImmobliers}
									/>
									<FormikControl
										control="select"
										label="Commune"
										name="commune"
										options={communes[formik.values.wilaya]}
										onChange={(e) => {
											setCommune(e.target.value);
											setPosition(
												findLocation(
													e.target.value,
													formik.values.wilaya
												)
											);
											formik.handleChange(e);
										}}
										onFirstRender={(c) => {
											setPosition(
												findLocation(
													c,
													formik.values.wilaya
												)
											);
										}}
									/>
									<FormikControl
										control="select"
										label="Categorie"
										name="typeAnnonce"
										options={typesAnnonces}
									/>

									<FormikControl
										control="textarea"
										type="text"
										label="Address"
										name="address"
										formik={formik}
										placeholder="cite 1000 LOGTS"
									/>
									<div>
										<FormikControl
											control="input"
											type="number"
											label="Prix"
											name="prix"
											formik={formik}
											placeholder="50000 da"
										/>
										<FormikControl
											control="input"
											type="number"
											label="Surface"
											name="surface"
											formik={formik}
											placeholder="200㎡"
										/>
										<div className="form-control">
											<label
												className="label"
												htmlFor="image"
											>
												<span className="label-text  text-lg">
													Image
												</span>
											</label>
											<input
												type="file"
												alt="image"
												id="image_input"
												aria-describedby="file_input_help"
												accept="image/*"
												name="image"
												className="file-input file-input-bordered w-full file-input-md file-input-accent file-selector-button:bg-primary bg-white"
												multiple={true}
											/>
										</div>
									</div>
									<div className="form-control">
										<label
											className="label"
											htmlFor="image"
										>
											<span className="label-text  text-lg">
												Position sur la carte
											</span>
										</label>
										<LocationPicker2
											position={position}
											onChangedPosition={setPosition}
										/>
									</div>
								</div>

								<div
									className={`form-control mt-6  ${
										status === "loading" ? "loading" : ""
									}`}
								>
									<button
										className={`btn btn-wide border-2 hover:bg-white2 hover:border-purple hover:text-purple mx-auto  bg-purple border-purple ${
											status === "pending_save"
												? "loading"
												: ""
										}`}
										type="submit"
										disabled={
											!formik.isValid ||
											formik.isSubmitting
										}
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
