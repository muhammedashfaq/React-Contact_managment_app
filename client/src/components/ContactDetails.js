import React from 'react'
import Card from '../asset/Cards/cards'
import AddButton from '../asset/Add/addButton'

const cards = () => {
  return (
    <div className='px-20 py-52 grid  gap-10 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:px-32 xl:grid-cols-3  xs:grid-cols-1 ' >
      <AddButton />
      <Card />
      
      <Card />


      <Card />


      <Card />


      <Card />




    </div>
  )
}

export default cards