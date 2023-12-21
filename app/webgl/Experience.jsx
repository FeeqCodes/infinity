import {
  Sparkles,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  Center,
  Sky,
  Cloud,
  Text3D,
  Stars,
  OrbitControls,
} from "@react-three/drei";
import React from "react";

const Experience = () => {
  // const model = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  // );

  // const { sunPosition } = useControls('sky', {
  //   sunPosition: { value: [4,1,3]}
  // })


  return (
    <>
      <Environment preset="city" />

      <color args={["#000"]} attach="background" />

      <OrbitControls />

      {/* <mesh position-y={-1}>
        <boxGeometry/>
        <meshNormalMaterial />
      </mesh> */}

        {/* <Text3D >
          INFINITY AI
          <meshNormalMaterial />
        </Text3D> */}
      {/* <Cloud opacity={0.5} color={"#ffffff"} position-y={1} /> */}

        {/* <Sky
          // sunPosition={sunPosition}
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        /> */}
        <Stars depth={200} radius={100}/>
      <Center>
        <PresentationControls
          global
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={2} scale={2.5}>
            {/* <primitive object={model.scene} position-y={-1} /> */}
          </Float>
        </PresentationControls>

        <Sparkles
          size={4}
          scale={[5, 5, 10]}
          position-y={1}
          // position-x={ -1}
          speed={0.5}
          count={20}
          color={"#fff"}

        />

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.3} />
      </Center>
    </>
  );
};

export default Experience;
