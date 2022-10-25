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

const Modal = ({children, open, functionUse, back,  bigModal , mediumModal}) => {

    const display = open ? 'flex' : 'none';
  return (
    <>
        <Overlay style={{display:display}}>
            <OverlayFake onClick={functionUse}/>
            <ContainerModal 
                style={{width: bigModal ? '700px' : mediumModal ? '550px' : '500px'}}
            >
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
    </>
    )
}

export default Modal