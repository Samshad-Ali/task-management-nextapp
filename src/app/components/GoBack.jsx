import Link from 'next/link'
import React from 'react'

const GoBack = () => {
  return (
    <div className='absolute top-14 bg-slate-700 font-sans px-4 py-2 rounded-sm right-20'>
    <Link href={'/'} >Go Back</Link>
  </div>
  )
}

export default GoBack