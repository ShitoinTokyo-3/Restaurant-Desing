import styled from "styled-components";

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    

    video {
        position: relative;
        top: 20px;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        video {
            display: none;
        }
    }


`;