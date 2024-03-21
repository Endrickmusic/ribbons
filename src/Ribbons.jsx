import { OrbitControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo } from "react"

import { DoubleSide, Vector3, CatmullRomCurve3, BufferGeometry } from "three"


export default function Ribbons(){

    const meshRef = useRef();
  
    useFrame((state) => {
      let time = state.clock.getElapsedTime()
  
      // start from 20 to skip first 20 seconds ( optional )
      // meshRef.current.material.uniforms.uTime.value = time
    
    })

  let num = 10
  let curvePoints = []
  for (let i = 0; i < num; i++){

    let theta = i / num * Math.PI * 2

    curvePoints.push(
      new Vector3(
        Math.sin(theta),
        Math.cos(theta),
        Math.sin(theta * 1.9)
      )
    )
  }


  const geometry = useMemo(() => {
    
    const curve = new CatmullRomCurve3( curvePoints ) 
    curve.tension = 0.7
    curve.closed = true
    const points = curve.getPoints( 50 )
    return new BufferGeometry().setFromPoints(points)
  }, [])

  return (
    <>
      <OrbitControls />    
      
      <mesh>
        <sphereGeometry 
        args={[ 1, 30, 30 ]}
        />
        <meshBasicMaterial 
        wireframe={true}
        color={0x009999}
        />
      </mesh>

      <line 
      geometry={geometry}
      >
          <lineBasicMaterial
            color={0x0000ff}
            linewidth={15}
          />
      </line>
   </>
  )}
