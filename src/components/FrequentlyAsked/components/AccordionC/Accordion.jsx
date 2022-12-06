import {useState, useEffect, useRef} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Accordion, ContainerAccordion, ContainerExamplesRow } from '../../../../styled-components/Containers/Containers';

export const AccordionC = ({e}) => {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const [arrow, setArrow] = useState(false)

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
        setArrow(!arrow)
    }

  return (
    <ContainerAccordion>
        <Accordion
            className={toggle ? "container-accordion-down" : "container-accordion-up"}
        >
            <ContainerExamplesRow 
                onClick={toggleState}
                className='accordion-visible'
            >
                <h3>{e.asked}</h3>
                {arrow ? 
                    <MdKeyboardArrowUp  fontSize={'1.5rem'}/> : 
                    <MdKeyboardArrowDown  fontSize={'1.5rem'}/>
                }
            </ContainerExamplesRow>
            <div 
                className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                style={{height: toggle ? `${heightEl}` : "0px"}}
                ref={refHeight}
            >
                <p>{e.answer}</p>
            </div>
        </Accordion>
    </ContainerAccordion>
  )
}
