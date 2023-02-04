import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./ControlComponents/FormikControl";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { URL } from "../../utils/services/crud";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function GoggleRegisterForm() {
	const { data: session } = useSession();

	const initialValues = {
		phoneNum: "",
		adress: "",
		isValid: true,
	};

	const validationSchema = Yup.object({
		phoneNumber: Yup.string().required("Required"),
		address: Yup.string().required("Required"),
	});

	const [status, setStatus] = useState("idle");
	const onSubmit = async (values) => {
		console.log(session);
		console.log("Form data", values);
		document.querySelector("#my-modal5").click();
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${session.user.jwt}`,
			},
		};
		try {
			const result = await axios.put(`${URL}/users/user`, values, config);

			console.log(result);
			setStatus("pending");
			setStatus("success");

			toast.success("Registration succeded!");
		} catch (error) {
			toast.error(error);

			console.log(error);
		}
	};
	return (
		<div>
			<div className="card flex-shrink-0 w-11/12 lg:w-full shadow-2xl bg-base-100">
				<div className="card-body ">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{(formik) => {
							return (
								<Form className="md:grid md:grid-cols-2 md:gap-4">
									<FormikControl
										control="input"
										type="text"
										label="Numero de telephone"
										name="phoneNumber"
										placeholder="06*****"
										formik={formik}
									/>
									<FormikControl
										control="input"
										type="text"
										label="Adresse"
										name="address"
										formik={formik}
										placeholder="adresse complete"
									/>

									<div className="form-control my-2 col-span-2 py-auto">
										<button
											className={`btn btn-primary bg-purple border-2 hover:bg-white2 hover:border-purple hover:text-purple mx-auto btn-wide ${
												status === "pending"
													? "loading"
													: ""
											}`}
											type="submit"
											disabled={!formik.isValid}
										>
											Envoyer
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default GoggleRegisterForm;
