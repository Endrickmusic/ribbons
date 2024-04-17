import { OrbitControls, useTexture, useHelper, useEnvironment } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo } from "react"

import { Vector3, CatmullRomCurve3, BufferGeometry, PlaneGeometry, FrontSide, BackSide, MeshStandardMaterial, DirectionalLightHelper, Matrix4, RepeatWrapping } from "three"


export default function Ribbons(){

  const envMap = useEnvironment({files:'./hdri/aerodynamics_workshop_2k.hdr'})
  const [ frontTexture, backTexture, imperfections ] = useTexture(['./textures/front.png', './textures/back.png', './textures/imperfections.jpg'])

  const meshRef = useRef()
  const lightRef = useRef()

  imperfections.wrapS = RepeatWrapping
  imperfections.wrapT = RepeatWrapping
  imperfections.repeat.set(1,1)
  imperfections.offset.setX(0.5);

    // useHelper(lightRef, DirectionalLightHelper, 1, 0xff0000);

  [frontTexture, backTexture].forEach(t=>{
      t.wrapS = 1000,
      t.wrapT = 1000,
      t.repeat.set(1,1),
      t.offset.setX(0.5)
      alphaTest: true
    })

    backTexture.repeat.set(-1, 1)

    useFrame((state) => {

      let time = state.clock.getElapsedTime() / 20.
  
      materials.forEach((m, i)=>{
        m.map.offset.setX(time)
        m.normalMap.offset.setX(time)
        if(i>0){
          m.map.offset.setX(-time)
          m.normalMap.offset.setX(time)
        }
      })
    
    })


  const { geometry, tempPlane, materials } = useMemo(() => {

    let curvePoints = [
      new Vector3(3, 0, -1),
      new Vector3(0.5, 1.5, 0),
      new Vector3(0, 1, 1),
      new Vector3(-3, 0.5, 0),
      new Vector3(-2, 0, -1),
      new Vector3(-3, -1, 0),
      new Vector3(0, -1.2, 1),
    ]  

    const curve = new CatmullRomCurve3( curvePoints ) 
    curve.closed = true
    curve.tension = 0.7
    curve.curveType = 'catmullrom'

    const points = curve.getPoints( 50 )

    const geometry = new BufferGeometry().setFromPoints(points)

    let number = 1000

    let frenetFrames = curve.computeFrenetFrames(number, true)

    let spacedPoints = curve.getSpacedPoints(number)
    
    let tempPlane = new PlaneGeometry(1, 1, number, 1) 

    let dimensions = [-0.6, 0.6]

    tempPlane.addGroup(0, 6000, 0)
    tempPlane.addGroup(0, 6000, 1)

    const frontMaterial = new MeshStandardMaterial({
      map: frontTexture,
      side: FrontSide,
      roughness: 0.025,
      metalness: 0.89,
      alphaTest: true,
      flatShading: true,
      normalMap: imperfections,
      envMap: envMap
    })

    const backMaterial = new MeshStandardMaterial({
      map: backTexture,
      side: BackSide,
      roughness: 0.01,
      metalness: 0.89,
      alphaTest: true,
      flatShading: true,
      normalMap: imperfections,
      envMap: envMap
    })

    const materials = [ frontMaterial, backMaterial ]

  

    let point = new Vector3()
    let binormalShift = new Vector3()

    let finalPoints = []

  //   console.log(frenetFrames)

    dimensions.forEach(d=>{
      for (let i = 0; i <= number; i++) {
        point = spacedPoints[i] 
        binormalShift.copy(frenetFrames.binormals[i].multiplyScalar(-d))
        finalPoints.push(new Vector3().copy(point).add(binormalShift).normalize())
      }
    })
  //   console.log(finalPoints)

    finalPoints[0].copy(finalPoints[number])
    finalPoints[number + 1 ].copy(finalPoints[2 * number + 1])


    tempPlane.setFromPoints(finalPoints)


    return { geometry, tempPlane, materials }
  }, [])

  return (
    <>
      <OrbitControls />  
      <ambientLight 
        intensity={.5} />  
      <directionalLight 
      position={[0, 0.1, 5]}
      target-position={[0, 0.5, 0]}
      intensity={8}
      color={0xffffff}
      ref={lightRef}
      />
        <group>
          <mesh>
            <sphereGeometry 
            args={[ 1, 30, 30 ]}
            />
            <meshBasicMaterial 
            wireframe={true}
            color={0xff9922}
            visible={false}
            />
          </mesh>

          <mesh
          geometry={tempPlane}
          material={materials}
          >
          </mesh>

          <line 
          geometry={geometry}
          >
              <lineBasicMaterial
                color={0xff0000}
                linewidth={1}
                visible={true}
              />
          </line>
        </group>
   </>
  )}
