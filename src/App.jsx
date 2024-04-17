import { Canvas } from '@react-three/fiber'
import { Environment } from "@react-three/drei"
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

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

      <Environment 
      preset='dawn' 
      background
      blur={0.00}
      backgroundIntensity={0.01}
      />

      <Ribbons />

      <TransTorus />

      <SilverCube />

      <GoldCylinder />

      <EffectComposer disableNormalPass multisampling={10}>
        <DepthOfField target={[0, 0, 0]} focalLength={0.01} bokehScale={10} height={700} />
      </EffectComposer>

    </Canvas>
  </>
  )
}

export default App
