import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import PriceRangeFilter from './PriceRangeFilter';

const PriceDropDown = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">

          <Button  
            key={"blur"}
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen("blur")}
            className="capitalize h-12"
          >
          {"Price"}
          </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className='w-96 pb-10 pt-5 px-0'>
          {(onClose) => (
            <>
            <PriceRangeFilter onChange={(min, max) => console.log(min, max)} minPrice={0} maxPrice={1000} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PriceDropDown