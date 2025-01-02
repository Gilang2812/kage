import React from 'react'
import { TopPageSection } from '../common/TopPageSection'
import H2 from '../common/H2'
import H3 from '../common/H3'

const Welcome = () => {
  return (
    <TopPageSection bgUrl='/images/KG04.png'>
        <section className='space-y-4 capitalize'>
        <H2>penginapan</H2>
        <H3>nikmati keunikan tinggal di desa</H3>
        </section>
    </TopPageSection>
  )
}

export default Welcome