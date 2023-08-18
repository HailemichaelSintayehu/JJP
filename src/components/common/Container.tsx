import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Container = ({children}:Props) => {
  return (
    <div className='w-full max-w-[1340px] mx-auto'>
      {children}
    </div>
  )
}

export default Container