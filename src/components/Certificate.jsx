import React from "react";
import styled from "styled-components";
import './zoom.css';


const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const LeftSide = styled.div`
  flex: 3;
  width: 2px;
  height: 2px;
  top:4em;
  left: 4em;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Mid = styled.div`
    flex: 3;
    width: 8px;
  height: 8px;
  top:4em;
  left: 18em;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const RightSide = styled.div`
  flex: 3;
  width: 8px;
  height: 8px;
  top:4em;
  left: 31em;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }


`;

// const ImgL = styled.img`
// background: url("../img/WebDev.jpg");
// display: flex;
//   width: 400px;
//   height: 400px;
//   object-fit: contain;
//   position: absolute;
//   top: 3.2em;
//   bottom: 1em;
//   left: 0;
//   right: 84em;
//   object-fit: cover;
//   margin: auto;
//   @media only screen and (max-width: 768px) {
//     width: 270px;
//     height: 270px;
//   }
//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
// `;

// const ImgM = styled.img`
// background: url("./img/JavaScr.jpg");
//   display: flex;
//   width: 400px;
//   height: 400px;
//   object-fit: contain;
//   position: absolute;
//   top: 3.2em;
//   bottom: 0;
//   left: 0;
//   right: 1.5em;
//   margin: auto;
//   @media only screen and (max-width: 768px) {
//     width: 270px;
//     height: 270px;
//   }
//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
// `;

// const ImgR = styled.img`
// background: url("./img/Pyth.jpg");
//   display: flex;
//   width: 400px;
//   height: 400px;
//   object-fit: contain;
//   position: absolute;
//   top: 3.2em;
//   bottom: 0;
//   left: 84em;
//   right: 1em;
//   margin: auto;
//   @media only screen and (max-width: 768px) {
//     width: 270px;
//     height: 270px;
//   }
//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
// `;

const Hero = () => {
  return (
    <Container>
      <div id="lbOuter">
        <div id="lbInner"></div>
      </div>
      {/* <div id="lightbox"> */}
      <LeftSide>
        <Title>Web Development</Title>
        <img src="img/WebDev.jpg" className="zoom" alt="Web Dev Certificate" />
        {/* <ImgL className="lightbox" /> */}
        {/* </img> */}
      </LeftSide>
      {/* </div> */}
      <Mid>
        {/* <div id="lightbox"> */}
        <Title>JavaScript</Title>
        <img src="img/JavaScr.jpg" className="zoom" alt="JavaScript Certificate" />
        {/* <ImgM className="lightbox" /> */}
        {/* </div> */}
      </Mid>
      <RightSide>
        {/* <div id="lightbox"> */}
        <Title>Python</Title>
        <img src="img/Pyth.jpg" className="zoom" alt="Python Certificate" />
        {/* <ImgR className="lightbox" /> */}
        {/* </div> */}
      </RightSide>
    </Container>
  );
};

// window.onload = function () {
//   let all = document.getElementsByClassName("zoomD"),
//     lightbox = document.getElementById("lightbox");

//   if (all.length > 0) {
//     for (let i of all) {
//       i.onclick = () => {
//         let clone = i.cloneNode();
//         clone.className = "";
//         lightbox.innerHTML = "";
//         lightbox.appendChild(clone);
//         lightbox.className = "show";
//       };
//     }
//   }

//   lightbox.onclick = () => lightbox.className = "";
// };

var zoomImg = function () {
  var clone = this.cloneNode();
  clone.classList.remove("zoom");

  var lb = document.getElementById("lbInner");
  lb.innerHTML = "";
  lb.appendChild(clone);


  lb = document.getElementById("lbOuter");
  lb.classList.add("show");
};

window.addEventListener("load", function () {
  var images = document.getElementsByClassName("zoom");
  if (images.length > 0) {
    for (let img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  document.getElementById("lbOuter").addEventListener("click", function () {
    this.classList.remove("show");
  })
});


export default Hero;