
import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name,formik,placeholder, ...rest } = props
  return (
    <div className='form-control'>
      <label className='label label-text  text-lg bg-white' htmlFor={name}>{label}</label>
      <Field as='textarea' placeholder={placeholder} id={name} name={name} {...rest} className={` input input-bordered pt-[10px] bg-white ${formik?.errors[name] && formik?.touched[name] ? 'border-1 border-rose-600 ' : ''} align-middle`} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea