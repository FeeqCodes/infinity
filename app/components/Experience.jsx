import {
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import React from "react";

const Experience = () => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />

      <color args={["#241a1a"]} attach="background" />

      {/* <OrbitControls /> */}
      {/* <mesh>
        <boxGeometry/>
        <meshNormalMaterial />
      </mesh> */}

      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={2} scale={2.5}>
          <primitive object={computer.scene} position-y={-1} />
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.3} />
    </>
  );
};

export default Experience;
