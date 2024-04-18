import React from 'react'

const Button = ({text,design,loading}) => {
  return (
   
      <button disabled={loading} className={`bg-[#E9EAF0] w-[324px] h-[57px] text-[#646464] rounded-3xl ${design} py-3 px-6 items-center `}>{text}</button>
    
  )
}

export default Button
