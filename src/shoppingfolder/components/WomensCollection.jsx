import React from 'react'

const WomensCollection = (props) => {
    const{title,image1,image2,image3,image4,image5,image6}=props.ladiesFashion
  return (
    <div>
     <h2> {title}</h2>
     <div className='bannerbox'>
     <img src="/pic/LadiesBanner.gif" alt="" /> </div>
     <div className='womensimages'>
     <div><img src={image1} alt={title} /></div>
      <div><img src={image2} alt={title} /></div>
      <div><img src={image3} alt={title} /></div>
      <div><img src={image4} alt={title} /></div>
      <div><img src={image5} alt={title} /></div>
      <div><img src={image6} alt={title} /></div>
     </div>
    </div>
  )
}

export default WomensCollection
