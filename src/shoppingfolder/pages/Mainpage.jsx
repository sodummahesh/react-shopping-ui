

import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import { Gents } from '../data'
import { Ladies } from '../data'
import WomensCollection from '../components/WomensCollection'

const Mainpage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection gentsFashion={gentsFashion}/>
      <WomensCollection ladiesFashion={ladiesFashion}/>
      <Footer/>

    </div>
  )
}

export default Mainpage
