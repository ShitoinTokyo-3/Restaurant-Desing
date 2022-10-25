import { useState } from "react"
import Modal from "../../../../components/Modal/Modal"
import { ContainerModalChildrenServices } from "../../../../styled-components/Containers/Containers"
import { ContainerExamples } from "../styled-components/select"
import imgExamples from "../../../../utilities/LogosExamples/LogosExamples"
import { ButtonLoginEmail } from "../../../../styled-components/Buttons/Buttons.elements"

const ServicesModalExamples = ({ open, functionUse, setModalFormExamplesFunction }) => {



    const [selectedImgs, setSelectedImgs] = useState([])

    const handleSelectImg = (img) => {
        const imgSelected = selectedImgs.find(item => item.id === img.id)
        if(imgSelected){
            setSelectedImgs(selectedImgs.filter(item => item.id !== img.id))
        }else{
            setSelectedImgs([...selectedImgs, img])
            if(selectedImgs.length === 3){
                setSelectedImgs([...selectedImgs, img].slice(1))
            }
        }
    }

    const handleSelectImgExamples = () => {
        if(selectedImgs.length > 0){
            setModalFormExamplesFunction(selectedImgs)
            setSelectedImgs([])
        }
    }

  return (
    <Modal
        open={open}
        functionUse={functionUse}
        bigModal
    >
        <ContainerModalChildrenServices>
            <h1>What type of design represents better you brand</h1>
            <p>Choose up to 3 different options for referral</p>

            <ContainerExamples>
                {imgExamples && imgExamples.map( img => {
                    return <div 
                        key={img.id}
                        className="imgExample"
                        id={selectedImgs.find(item => item.id === img.id) ? 'selected' : ''}
                        onClick={() => handleSelectImg(img)}
                    >
                        <img src={img.img} alt={img.name} />
                    </div>
                })}
            </ContainerExamples>
            <ButtonLoginEmail
                onClick={handleSelectImgExamples}
            >Continue</ButtonLoginEmail>
        </ContainerModalChildrenServices>

    </Modal>
  )
}

export default ServicesModalExamples