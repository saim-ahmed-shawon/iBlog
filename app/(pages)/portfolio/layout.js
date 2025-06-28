import React from 'react'

const layout = ({children}) => {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <h1 className='text-5xl font-bold px-4'>Our Galaxy</h1>
        {children}
    </div>
  )
}

export default layout
