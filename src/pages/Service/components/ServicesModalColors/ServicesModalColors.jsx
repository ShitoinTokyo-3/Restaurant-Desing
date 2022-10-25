import Modal from "../../../../components/Modal/Modal"
import { ContainerModalChildrenServices } from "../../../../styled-components/Containers/Containers"
import { ContainerColors } from "../styled-components/select"
import colors from "../../../../utilities/LogosExamples/ColorsExample"
import { useState } from "react"
import { ButtonLoginEmail } from "../../../../styled-components/Buttons/Buttons.elements"
import { Navigate } from "react-router-dom"

const ServicesModalColors = ({ open, functionUse, setModalFormColorsFunction }) => {

    const [selectedColor, setSelectedColor] = useState(null)
    const [validForm, setvalidForm] = useState(false)

    const handleSelectColor = (color) => {
        setSelectedColor(color)
    }

    const handleSelectColorExamples = () => {
        if(selectedColor){
            setModalFormColorsFunction(selectedColor)
            setSelectedColor(null)
            setvalidForm(true)
        }
    }
  return (
    <Modal
        open={open}
        functionUse={functionUse}
        mediumModal
    >
        <ContainerModalChildrenServices>
            <h1>Colors speak of the emotions your business arouses</h1>
            <p>Choose a palette of colors</p>
            <ContainerColors>
                {colors && colors.map( color => {
                    return <div
                        key={color.id}
                        className="imgExample"
                        id={selectedColor && selectedColor === color.name ? 'selected' : ''}
                        onClick={() => handleSelectColor(color.name)}
                    >
                        <img src={color.img} alt={color.name} />
                        <p>{color.name}</p>
                    </div>
                })}
            </ContainerColors>
            <ButtonLoginEmail
                onClick={handleSelectColorExamples}
            >Continue</ButtonLoginEmail>
        </ContainerModalChildrenServices>
        {validForm && <Navigate to="payment" />}
    </Modal>
  )
}

export default ServicesModalColors