import { useSelector } from "react-redux"
import Modal from "../../../../components/Modal/Modal"
import {  ContainerModalChildrenRegister } from "../../../../styled-components/Containers/Containers"
import { AiFillCaretDown } from "react-icons/ai"
import { Dropdown, DropdownList, DropdownSelect, Select } from "../styled-components/select"
import { useState } from "react"

const ServicesModalCategories = ({ open, functionUse, handleOptionModalCategories }) => {
  const categories  = [
    {id:1,name:'Fine Dining'}, 
    {id:2,name:'Casual Dining'}, 
    {id:3,name:'Contemporary Casual'},    
    {id:4,name:'Family Style'}, 
    {id:5,name:'Fast Casual'}, 
    {id:6,name:'Fast Food'},    
    {id:7,name:'Cafe'}, 
    {id:8,name:'Bar'}, 
    {id:9,name:'Buffet'},    
    {id:10,name:'Food Trucks and Concession Stands'}, 
    {id:11,name:'Pop-Up Restaurant'}, 
    {id:12,name:'Ghost Restaurant'}
  ]

  const [selected, setSelected] = useState(false);


  const handleSetSelect = () => {
    setSelected(!selected)
  }

  return (
    <Modal
        open={open}
        functionUse={functionUse}
    >
        <ContainerModalChildrenRegister>
        <h1>Choose the category your business belongs to...</h1>
          <Dropdown>
            <DropdownSelect onClick={handleSetSelect}>
              <Select  ></Select>
              <div className="iconSelect">
                <AiFillCaretDown />
              </div>
            </DropdownSelect>
            {selected && (
            <DropdownList className="DropdownList" style={{opacity:  selected? '1': '0',visibility: selected? 'visibility': 'hidden'}} >
              {categories && categories.map( category => {
                return <div 
                  key={category.id} 
                  className="dropdownListItem"
                  onClick={() => handleOptionModalCategories(category.name)}
                >
                  {category.name}
                </div>
              })}
            </DropdownList>
            )}
          </Dropdown>
          <br/>
          <p>We will use this info to show you some cool branding ideas</p>
          {selected && categories.map( category => {
                return <div 
                key={category.id + 1000} 
                style={{color: 'transparent', marginBottom:'.35rem'}}  >
                  {category.name}
                </div>
              })}
        </ContainerModalChildrenRegister>
    </Modal>
  )
}

export default ServicesModalCategories