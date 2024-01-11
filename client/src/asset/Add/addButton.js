import React, { useState } from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { AddContact } from '../../components/addContact';
const AddButton = () => {





  const [showModal, setShowModal] = useState(false);


  const handleClose =()=>{
    setShowModal(false)
  }

  const handleModal = ()=>{
    setShowModal(true)
  }
  return (
    <div>
      <Card className="w-full max-w-[26rem] shadow-lg bg-gray-300">
     

        <CardBody className='m-28'>
        <button type='button' onClick={handleModal}>


          <img
            src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg
        '
            alt="ui/ux review check"
          />
          </button>
        </CardBody>
        


      </Card>

{
  showModal && (

    <AddContact   onCloce={handleClose} />
  )
}
    </div>  
  )
}

export default AddButton