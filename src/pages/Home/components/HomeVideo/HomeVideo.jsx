import MainVideo from '../../../../assets/MainVideo/RestaurantDesignBar.mp4'
import { VideoContainer } from '../../../../styled-components/Videos/Videos.js'

const HomeVideo = () => {
  return (
    <>
        <VideoContainer >
            <video autoPlay muted>
                <source src={MainVideo} type="video/mp4"/>
            </video>
        </VideoContainer>
    </>
  )
}

export default HomeVideo