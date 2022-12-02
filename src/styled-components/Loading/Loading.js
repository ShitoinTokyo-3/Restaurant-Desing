{/* <div class="loadingio-spinner-dual-ball-w0a1sozp0nb"><div class="ldio-vzsb3swzxum">
<div></div><div></div><div></div>
</div></div>
<style type="text/css">
@keyframes ldio-vzsb3swzxum-o {
    0%    { opacity: 1; transform: translate(0 0) }
   49.99% { opacity: 1; transform: translate(80px,0) }
   50%    { opacity: 0; transform: translate(80px,0) }
  100%    { opacity: 0; transform: translate(0,0) }
}
@keyframes ldio-vzsb3swzxum {
    0% { transform: translate(0,0) }
   50% { transform: translate(80px,0) }
  100% { transform: translate(0,0) }
}
.ldio-vzsb3swzxum div {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: 60px;
  left: 20px;
}
.ldio-vzsb3swzxum div:nth-child(1) {
  background: #5e17eb;
  animation: ldio-vzsb3swzxum 1.3157894736842106s linear infinite;
  animation-delay: -0.6578947368421053s;
}
.ldio-vzsb3swzxum div:nth-child(2) {
  background: #ffffff;
  animation: ldio-vzsb3swzxum 1.3157894736842106s linear infinite;
  animation-delay: 0s;
}
.ldio-vzsb3swzxum div:nth-child(3) {
  background: #5e17eb;
  animation: ldio-vzsb3swzxum-o 1.3157894736842106s linear infinite;
  animation-delay: -0.6578947368421053s;
}
.loadingio-spinner-dual-ball-w0a1sozp0nb {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #dddddd;
}
.ldio-vzsb3swzxum {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 
}
.ldio-vzsb3swzxum div { box-sizing: content-box; }
</style> */}

import styled from 'styled-components';

export const LoadingDivs = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: #E6E6E6;    
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes ldio-vzsb3swzxum-o {
        0%    { opacity: 1; transform: translate(0 0) }
    49.99% { opacity: 1; transform: translate(65px,0) }
    50%    { opacity: 0; transform: translate(65px,0) }
    100%    { opacity: 0; transform: translate(0,0) }
    }

    @keyframes ldio-vzsb3swzxum {
        0% { transform: translate(0,0) }
       50% { transform: translate(65px,0) }
      100% { transform: translate(0,0) }
    }

    .ldio-vzsb3swzxum div {
        position: absolute;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        top: 60px;
        left: 20px;
    }

    .ldio-vzsb3swzxum div:nth-child(1) {
        background: #5e17eb;
        animation: ldio-vzsb3swzxum 1.3157894736842106s linear infinite;
        animation-delay: -0.6578947368421053s;
    }
    .ldio-vzsb3swzxum div:nth-child(2) {
        background: #ffffff;
        animation: ldio-vzsb3swzxum 1.3157894736842106s linear infinite;
        animation-delay: 0s;
    }
    .ldio-vzsb3swzxum div:nth-child(3) {
        background: #5e17eb;
        animation: ldio-vzsb3swzxum-o 1.3157894736842106s linear infinite;
        animation-delay: -0.6578947368421053s;
    }
    .loadingio-spinner-dual-ball-w0a1sozp0nb {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: #E6E6E6;
    }
    .ldio-vzsb3swzxum {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; 
    }

    .ldio-vzsb3swzxum div {
        box-sizing: content-box;
    }
`;