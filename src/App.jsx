import { Canvas } from '@react-three/fiber'
import { Environment, useEnvironment } from "@react-three/drei"

import './index.css'
import Ribbons from './Ribbons.jsx'
import { TransTorus, SilverCube, GoldCylinder } from './Assets.jsx'

function App() {
  
  return (
  <>

    <Canvas
    camera={{ 
      position: [0, 0, 15],
      fov: 40 }}  
    shadows
    >
      <color attach="background" args={[0xffffee]} />

      <Environment preset='city' />

      <Ribbons />

      <TransTorus />

      <SilverCube />

      <GoldCylinder />

    </Canvas>
  </>
  )
}

export default App
