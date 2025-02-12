import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Container = ({children}:Props) => {
  return (
    <div className='w-full max-w-[2560px] mx-auto md:px-32'>
      {children}
    </div>
  )
}

export default Container