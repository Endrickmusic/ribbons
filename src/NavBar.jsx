import { Link } from 'react-router-dom'

import styled from 'styled-components'
import instaImg from './assets/insta.png' 
import tiktokImg from './assets/tiktok.png' 
import xImg from './assets/x.png' 

const Header = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
padding: 1rem 2.5rem;
display: flex;
justify-content: space-between;
align-items: center;
background: rgba(0, 0, 0, 0); // Semi-transparent black background
z-index: 1000; // High z-index to ensure it's on top of other elements

@media (max-width: 640px) {
  padding: 1rem 0.5rem;
}
`;

const Nav = styled.nav`
position: fixed;
top: 0;
right: 0;
display: flex;
align-items: center;
margin: 0.9rem;
`;

const NavList = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  display: none;

  @media (min-width: 640px) {
    display: flex;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  user-select: none;
  padding: 0.0rem 0.75rem 0.4rem;
  font-size: 2.3rem;
  cursor: pointer;
  color: yellow;
  -webkit-text-stroke-width: .5px;
  -webkit-text-stroke-color: black;
  transition: all 0.3s;

  &:hover {
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: white;
    background: linear-gradient(to right, #2222ff, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Icons = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 1.0rem;
  justify-content: flex-end;
  flex: 1;
  cursor: pointer;
  margin-right: 1.0rem;
  img {
    user-select: none;
    transition: filter 0.3s; // Add a transition for smooth color inversion

    &:hover {
      filter: invert(1); // Invert the colors of the image
    }
`;

const Navbar = () => {

  return (

        <Header>
          <Nav>
            <Icons>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instaImg} alt="Instagram" height={31} width={31} /></a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><img src={tiktokImg} alt="TikTok" height={32} width={32} /></a>
                <a href="https://twitter.com/Endrick17150782" target="_blank" rel="noopener noreferrer"><img src={xImg} alt="X" height={23} width={23} /></a>
            </Icons>
            
            <NavList>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </NavList>

        </Nav>
   
    </Header>

  );
};

export default Navbar;