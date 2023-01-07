import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Select(props) {
	const { label, name, options, ...rest } = props;
	return (
		<div className="form-control">
			<label className=" label label-text  text-lg" htmlFor={name}>
				{label}
			</label>
			<Field
				as="select"
				className="input input-bordered bg-white"
				id={name}
				name={name}
				{...rest}
			>
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.key}
						</option>
					);
				})}
			</Field>
			<ErrorMessage component={TextError} name={name} />
		</div>
	);
}

export default Select;
