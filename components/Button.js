import React from 'react'

const Button = ({type, text, width, disabled}) => {
  return (
    <>
      <button disabled={disabled? disabled: false} type={type? type : "button"} className={`${width? width : "w-fit"} text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800 cursor-pointer`}>{text}</button>
    </>
  )
}

export default Button
