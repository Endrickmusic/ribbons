import styled, { keyframes } from 'styled-components'

export const fade = keyframes`
from {
  color: #ffff11;
}

to {
  -webkit-text-stroke-width: .5px;
  -webkit-text-stroke-color: white;
  background: linear-gradient(to right, #2222ff, #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
`

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 0.5vw;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Ayer Poster', serif;
    font-weight: 200;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
    color: #ff22bb
  }
`

export const NavBar = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  color: #ffffff;
  `

  export const TopLeft = styled.div`
  user-select: none;
  position: absolute;
  bottom: 3vw;
  left: 20%;
  color: #ffff11;
  font-size: 15.2vw;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;

  &:hover {
    animation: ${fade} 0.5s forwards;
  }
  `

export const BottomLeft = styled.div`
user-select: none;
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
  color: #ff22bb;
  font-size: 1.2vw;
`

export const BottomMiddle = styled.div`
user-select: none;
  position: absolute;
  bottom: 3vw;
  left: 30%;
  width: 30ch;
  max-width: 40%;
  color: #ffff11;
  font-size: 3.2vw;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;

  &:hover {
    animation: ${fade} 0.5s forwards;
  }
`

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  color: #ff22bb;
  font-size: 1.2vw;
`

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #ff22bb;
    margin-bottom: 6px;
  }
  #menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}
`

export const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 14px;
  color: #ff22bb;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

export const Menu = styled.div`

position: absolute;
display: flex;
flex-direction: column;
top: 5vw;
right: 5vw;
font-size: 1vw;
& > div {
  position: relative;
  width: 24px;
  height: 2px;
  background: #ff22bb;
  margin-bottom: 6px;
}

`