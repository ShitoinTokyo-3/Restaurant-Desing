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
    const hiddenOrOpen = open ? 'flex' : 'none';
  return (
    <>
    <Overlay style={{display:hiddenOrOpen}}>
        <OverlayFake style={{display:hiddenOrOpen}} onClick={functionUse}/>
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
    </>
    )
}

export default Modal