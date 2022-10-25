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
        <span className="productDescription">{children}</span>
      
      <NavLink
          to={`/services/${params}/${name.toLowerCase().replaceAll(' ', '-')}`}
          style={{ alignSelf: 'center' }}
      >
          <ButtonLogin>GET MORE INFORMATION</ButtonLogin>
      </NavLink>

    </ContainerProduct>
  )
}

export default Product