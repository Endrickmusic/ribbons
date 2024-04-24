import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Scroll, ScrollControls, useEnvironment, useScroll } from "@react-three/drei";
import Experience from "./Experience";
import './index.css'
import Overlay from './Overlay.jsx'

export default function App() {


  const scroll = useScroll()
  // console.log(scroll.offset)

 return (

 <>
    <Canvas 
    // orthographic
    shadows 
    camera={{ 
      position: [0, -1, 3], 
      fov: 40, 
      // zoom: 250 
      }}>
      {/* <Environment
        background
        files="./hdris/envmap.hdr" 
        backgroundIntensity={0.0}
        environmentIntensity={0.0}
        />
        <color 
          attach="background" 
          args={["#000000"]} /> */}
      <ScrollControls>
      <Experience />
      </ScrollControls>
    </Canvas>
      <Overlay />
      </>
  );
}

