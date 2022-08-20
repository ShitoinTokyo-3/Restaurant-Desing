import { HomeChefContainer, HomeChefLeft, HomeChefRight } from "./styled-components/HomeChef.element"
import Chef from '../../../../assets/HomeImages/CocineroRDB.png'

const HomeChef = () => {
  return (
    <HomeChefContainer>
        <HomeChefLeft>
            <img src={Chef} alt=""/>
        </HomeChefLeft>
        <HomeChefRight>
            <h3>
                Don't take your eyes off the <strong>Grill!</strong>
            </h3>
            <p>
                We take care of communicating your art with food.
            </p>
            <p>
                Get help from an expert to tell the world what your business does and bring more guests to the table.
            </p>
            <p>
                Our designs include full copyright ownership.<br/>
                <span>No additional or hidden costs!</span>
            </p>
            <p>

            </p>

        </HomeChefRight>
    </HomeChefContainer>
  )
}

export default HomeChef