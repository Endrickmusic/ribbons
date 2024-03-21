import { Canvas } from '@react-three/fiber'

import './index.css'
import Ribbons from './Ribbons.jsx'

function App() {
  
  return (
  <>

    <Canvas
    camera={{ 
      position: [0, 0, 2],
      fov: 40 }}  
    >
      <color attach="background" args={[0xffffee]} />
      <Ribbons />
    </Canvas>
  </>
  )
}

export default App
