import React from 'react'
import IndividualIntervalsExample from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollection/NewCollections'
import Newsletter from '../components/NewsLetter/Newsletter'

const Shop = () => {
  return (
    <div>
      <IndividualIntervalsExample/>
     <Popular/>
     <Offers/>
     <NewCollections/>
     <Newsletter/>
    </div>
  )
}

export default Shop
