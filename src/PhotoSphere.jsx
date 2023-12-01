import { useRef, Suspense } from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Sphere, useTexture, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BackSide } from "three";

const photoScale = 10;
const rotationSpeed = 0.001;

function PhotoSphere(props) {
  const { children, photoUrl, position } = props;
  const texture = useTexture(photoUrl);
  const sphereRef = useRef();
  
  useFrame(() => {
    sphereRef.current.rotation.y += rotationSpeed;
  });

  
  return (
    <mesh position={position} scale={photoScale} ref={sphereRef}>
        <sphereGeometry/>
        <meshStandardMaterial map={texture} side={BackSide} />
      {children}
    </mesh>
    
  );

}

export default PhotoSphere;