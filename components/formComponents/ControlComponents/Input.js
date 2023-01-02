import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { label, name, formik, placeholder, ...rest } = props
  return (
    <div className='form-control bg-white'>
      <label className='label' htmlFor={name}>
        <span className='label-text  text-lg'>{label}</span>
      </label>
      <Field
        placeholder={placeholder}
        id={name}
        name={name}
        {...rest}
        className={` input input-bordered ${
          formik?.errors[name] && formik?.touched[name]
            ? 'border-1 border-rose-600 '
            : ''
        } ${
          name === 'state'
            ? 'range range-accent range-xs px-0'
            : ''
        } 
        bg-white  `}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input
