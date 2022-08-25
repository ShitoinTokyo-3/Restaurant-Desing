import { HomeChefContainer, HomeChefLeft, HomeChefRight } from "./styled-components/HomeChef.element"
import { ButtonBannerToForm } from "../../../../styled-components/Banner/banner"
import Chef from '../../../../assets/HomeImages/CocineroRDB.png'

const HomeChef = ({setModal}) => {
  return (
    <HomeChefContainer>
        <HomeChefLeft>
            <img src={Chef} alt=""/>
        </HomeChefLeft>
        <HomeChefRight>
            <h3>
                Get a FREE consultation with one of our experts
            </h3>
            <p>
                Our seasoned team has more than 40 years of combined experience. 
                Our team consists of graphic designers, brand experts, restaurant owners, 
                coffee roasters and Qgraders, POS experts, etc.  
            </p>
            <p>
                We've studied how customers, followers, and shoppers make decisions in order 
                to understand what factors in the way they interact with food brands. 
            </p>
            <p>
                Learn more about our marketing process and discover how RDB may help you maximize results.
            </p>
            <ButtonBannerToForm className="ButtonChef"  onClick={setModal}>
                Book a 15 min call with us
            </ButtonBannerToForm>

        </HomeChefRight>
    </HomeChefContainer>
  )
}

export default HomeChef