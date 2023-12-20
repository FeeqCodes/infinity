"use client";
import React from 'react'

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, MeshBasicMaterial } from "three";
import Experience from './Experience';



const MyCanvas = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas className="r3f h-2xl w-2xl">
        <Experience />
      </Canvas>
    </div>
  );
}

export default MyCanvas