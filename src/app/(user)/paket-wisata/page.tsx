
import { Cook } from '@/components/paketWisata/Cook'
import { Craft } from '@/components/paketWisata/Craft'
import { Explore } from '@/components/paketWisata/Explore'
import { List } from '@/components/paketWisata/List'
import { PaketWisataWelcome } from '@/components/paketWisata/PaketWisataWelcome'
import { Tracking } from '@/components/paketWisata/Tracking'
import React from 'react'

const PaketWisata = () => {
  return (
    <main>
        <PaketWisataWelcome />
        <List />
        <Tracking />
        <Explore />
        <Craft />
        <Cook />
    </main>
  )
}

export default PaketWisata