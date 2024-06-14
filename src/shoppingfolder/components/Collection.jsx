import React from 'react'

const Collection =(props) => {
  const {title,image1,image2,image3,image4,image5,image6}=props.gentsFashion
  return (
    <div className='collectionsection'>
      <h2>{title}</h2>
      <div className='menimages'>
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

export default Collection
