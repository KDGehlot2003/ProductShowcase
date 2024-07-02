import React, {useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const PriceDropDown = ({ onChange, minPrice, maxPrice }) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);
  
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setMinValue(value);
    onChange(value, maxValue);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxValue(value);
    onChange(minValue, value);
  };


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
                <div className='col-start-2 col-end-6 mt-4 mx-auto w-56 text-center'>
                <label>Price Range:</label>
                <br/>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={minValue}
                  onChange={handleMinChange}
                  className="form-range mt-1"
                />
                <br />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={maxValue}
                  onChange={handleMaxChange}
                  className="form-range mt-1"
                />
                <div className="mt-2">Min: ${minValue} - Max: ${maxValue}</div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PriceDropDown