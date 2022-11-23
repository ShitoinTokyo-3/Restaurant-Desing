import { NavLink } from "react-router-dom"
import { ButtonLogin } from "../../../../styled-components/Buttons/Buttons.elements"
import { ContainerProduct } from "../styled-components/Product"

const Product = ({ name, price, img, children, params }) => {
  return (
    <ContainerProduct>
      <div className="productNameContainer">
        <h3>{name}</h3>
      </div>
      <div className="productImgAndPriceContainer">
        <img src={img} alt={name}/>
        <div className="productPriceContainer">
          <span>{`$${price}`}</span>
        </div>
      </div>
      <div className="productDescription">
        <span>{children}</span>
      </div>
      {params ? 
      <NavLink
          to={`/services/${params}/${name.toLowerCase().replaceAll(' ', '-')}`}
          style={{ alignSelf: 'center' }}
      >
          <ButtonLogin>GET STARTED NOW</ButtonLogin>
      </NavLink>
      :
      <div
        style={{ alignSelf: 'center' }}
      >
          <ButtonLogin>GET STARTED NOW</ButtonLogin>
      </div>
      }
    </ContainerProduct>
  )
}

export default Product