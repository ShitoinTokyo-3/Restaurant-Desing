import { 
    Overlay,
    ContainerModal,
    EncabezadoModal,
    BotonCerrar,
    ModalChildrens,
    OverlayFake,
} from './styled-components/Modal.elements';
import { GrFormClose } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';

const Modal = ({children, open, functionUse, back }) => {
  return (
    <>
    {open && 
        <Overlay >
            <OverlayFake onClick={functionUse}/>
            <ContainerModal >
                <EncabezadoModal>
                </EncabezadoModal>
                {back ?
                    <BotonCerrar 
                        onClick={() => functionUse()}
                        style={{left: '20px'}}
                    >
                        <BiArrowBack color='#000' style={{width:'100%',height:'100%'}}/> 
                    </BotonCerrar>: 
                    <BotonCerrar onClick={() => functionUse()} >
                        <GrFormClose style={{width:'100%',height:'100%'}}/>
                    </BotonCerrar>}

                <ModalChildrens>
                    {children}
                </ModalChildrens>
            </ContainerModal>
        </Overlay>
    }
    </>
    )
}

export default Modal