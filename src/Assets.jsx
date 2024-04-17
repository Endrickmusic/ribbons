import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, useTexture } from '@react-three/drei'



export function TransTorus(){

    const torusRef = useRef()
    useFrame((state, delta) => {
      torusRef.current.rotation.y = torusRef.current.rotation.x += delta / 4.5
    })
    return(
      <mesh
      ref={torusRef}
      scale={0.2}
      position={[0.0, 1.5, 0]}
      >
          <torusGeometry
          args={[48.6, 0.9, 16, 100, 2*Math.PI]}
          />
          <MeshTransmissionMaterial 
          buffer={ false } 
      ior={1.2} 
      thickness={1.0} 
      anisotropy={0.3} 
      chromaticAberration={0.04} 
      roughness = {0.6}
      backside = {true}
      backsideThickness = { 0.1 }
      transmission = {1}
      color={'#bbbbff'}
      />
  </mesh>
    )
  }

export function SilverCube(){

    const imperfections = useTexture('./textures/imperfections.jpg')
    const cubeRef = useRef()
    useFrame((state, delta) => {
      cubeRef.current.rotation.x = cubeRef.current.rotation.y += delta / 3
    })
    return(
      <mesh
      ref={cubeRef}
      scale={0.2}
      position={[4.0, -0.5, -5]}
      >
          <boxGeometry
          args={[2, 2, 28]}
          />
          <meshStandardMaterial 
          color = {'#ffffff'}
          roughness = {0.09}
          metalness = {1}
          normalMap={imperfections}
      />
  </mesh>
    )
  }

export function GoldCylinder(){

    const cylRef = useRef()
    useFrame((state, delta) => {
      cylRef.current.rotation.x = cylRef.current.rotation.y += delta / 3
    })
    return(
      <mesh
      ref={cylRef}
      scale={0.2}
      position={[-3.0, 1.5, 4]}
      >
          <cylinderGeometry
          args={[0.1, 5, 12, 120]}
          />
          <meshStandardMaterial 
          color = {'#ffff00'}
          roughness = {0.2}
          metalness = {1}
      />
  </mesh>
    )
  }