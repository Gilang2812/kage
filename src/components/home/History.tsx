import React from 'react'
import { ContentSection } from '../common/ContentSection'
import Paragraph from './Paragraph'

const History = () => {
    const text = "Sempatkan berjalan kaki keliling desa untuk menikmati suasana pemukiman yang tidak berubah selama ratusan tahun dengan rumah-rumah bergaya indies. Kita juga dapat menjumpai rumah kelahiran H. Agus Salim, Roehana Koeddoes dan Sutan Syahrir. Jangan lupa juga mampir di Kerajinan Amai Setia yang telah berdiri sejak 1915 untuk berbelanja produk kerajinan khas Koto Gadang berupa produk sulam dan tenun serta produk dari kerajinan perak. Selain itu, sisakan ruang di perutmu untuk mencoba gulai itik khas Koto Gadang yang sulit dijumpai di tempat lain."
  return (
    <ContentSection title='sejarah kotogadang'>
       <Paragraph > {text}</Paragraph>
    </ContentSection>
  )
}

export default History