import { Globe2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BrandLogo = () => {
  return (
    <span className='flex items-center gap-2 font-semibold flex-shrink-0 mr-auto text-lg'>
      <Image src={'/logo.svg'} alt='' width={40} height={40} />
      <span>Easy app</span>
    </span>
  )
}

export default BrandLogo