 
import { Description } from '@/components/penginapan/Description'
import Homestays from '@/components/penginapan/Homestays'
import Welcome from '@/components/penginapan/Welcome'
import React from 'react'

const Penginapan = () => {
  return (
    <main>
        <Welcome />
        <Description />
        <Homestays/>
    </main>
  )
}

export default Penginapan