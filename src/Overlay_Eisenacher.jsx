import { Container, TopLeft, BottomLeft, BottomRight, Hamburger, LeftMiddle } from './styles.js'
import { useState } from 'react'

import DropDownMenu from './DropDownMenu.jsx'

export default function Overlay() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <TopLeft>
        <h1>
          LANDING
          <br />
          PAGES —
        </h1>       
      </TopLeft>
      <LeftMiddle>
      <p>In React & Threejs —</p>
      </LeftMiddle>
      <BottomLeft>
        An idea of  <a href="https://www.endrick.de"> Endrick</a>
      </BottomLeft>
      <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight>
      <Hamburger onClick={() => setOpenMenu((prev) => !prev)}>
        
        {/* <div style={{ display: openMenu ? 'none' : 'flex' }}/>
        <div style={{ display: openMenu ? 'none' : 'flex' }}/>
        <div style={{ display: openMenu ? 'none' : 'flex' }}/> */}
        <div />
        <div />
        <div />
      </Hamburger>
      { openMenu && <DropDownMenu />
        }

    </Container>
  )
}
